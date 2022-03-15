//import CustomerAdapter from '../adapters/CustomerAdapter';
import ServiceBase, { Method, PLATFORM, SHOP_DOMAIN } from "../core";

class CustomerService extends ServiceBase {
    static async getCustomer() {
        if (!this.subscriptionsCustomerId) {
            await this.obtainToken();
        }

        const customer = await this.callAPI({
            method: Method.GET,
            url: `/customers/${this.subscriptionsCustomerId}`,
            params: {
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM,
            },
        });

        return customer;
    }
}

export default CustomerService;