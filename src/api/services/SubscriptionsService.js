import ServiceBase, { Method, PLATFORM, SHOP_DOMAIN } from "../core";
import SubscriptionsAdapter from "../adapters/SubscriptionsAdapter";
import AddressesAdapter from "../adapters/AddressesAdapter";
import IntervalsAdapter from "../adapters/IntervalsAdapter";
import PaymentMethodsAdapter from "../adapters/PaymentMethodsAdapter";

export const PaymentUpdateMethod = {
    EMAIL: "trigger_email",
    URL: "url",
};

class SubscriptionsService extends ServiceBase {
    static async getSubscriptions() {
        if (!this.subscriptionsCustomerId) {
            await this.obtainToken();
        }
        const { subscriptions } = await this.callAPI({
            method: Method.GET,
            url: `/customers/${this.subscriptionsCustomerId}/subscriptions`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });

        return subscriptions.map(SubscriptionsAdapter.fromServer);
    }

    static async getIntervals(params) {
        const { subscriptionID } = params;

        const { intervals } = await this.callAPI({
            method: Method.GET,
            url: `/subscriptions/${subscriptionID}/intervals`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });

        return intervals.map(IntervalsAdapter.fromServer);
    }

    static async getPaymentMethod(params) {
        const { subscriptionID } = params;

        const { payment_method } = await this.callAPI({
            method: Method.GET,
            url: `/subscriptions/${subscriptionID}/payment_method`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });

        return PaymentMethodsAdapter.fromServer(payment_method);
    }

    static async pauseSubscription(params) {
        const { subscriptionID } = params;

        await this.callAPI({
            method: Method.POST,
            url: `/subscriptions/${subscriptionID}/pause`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });
    }

    static async cancelSubscription(params) {
        const { subscriptionID } = params;

        await this.callAPI({
            method: Method.POST,
            url: `/subscriptions/${subscriptionID}/cancel`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });
    }

    static async activateSubscription(params) {
        const { subscriptionID } = params;

        await this.callAPI({
            method: Method.POST,
            url: `/subscriptions/${subscriptionID}/activate`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });
    }

    static async updateAddress(params) {
        const { address } = params;
        const { id } = address;
        const customerID = this.subscriptionsCustomerId;

        try {
            await this.callAPI({
                method: Method.PUT,
                url: `/customers/${customerID}/addresses/${id}`,
                params: {
                    shop: SHOP_DOMAIN,
                    platform_type: PLATFORM,
                },
                data: { customer_address: AddressesAdapter.toServer(address) },
            });
        } catch (error) {
            throw AddressesAdapter.errorUpdate(error);
        }
    }

    static async updateInterval(params) {
        const { subscriptionID, intervalID } = params;

        await this.callAPI({
            method: Method.PUT,
            url: `/subscriptions/${subscriptionID}/interval/${intervalID}`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });
    }

    static async updatePaymentMethodEmail(params) {
        const { subscriptionID } = params;
        console.log(" > subscriptionID", subscriptionID);

        await this.callAPI({
            method: Method.POST,
            url: `/subscriptions/${subscriptionID}/payment_method_email`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });
    }
}

export default SubscriptionsService;
