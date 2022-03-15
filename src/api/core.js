import axios from "axios";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SHOP_DOMAIN = window?.BOLD?.subscriptions?.config?.shopDomain ?? null;
export const PLATFORM = "shopify";

export const Method = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
};

class ServiceBase {
    static subscriptionsToken = null;
    static subscriptionsCustomerId = null;

    static async obtainToken() {
        const {
            value: {jwt: platformToken, customerId: platformCustomerID}
        } = await new Promise((resolve) => window.BOLD.subscriptions.getJWT(resolve));

        const {
            subscriptionsWebToken: boldToken,
            subscriptionsWebTokenExpTime: tokenExpTime,
            customer: {bold_platform_id: boldCustomerID}
        } = await this.callAPI({
            method: Method.GET,
            url: "/login",
            params: {
                platform_customer_id: platformCustomerID,
                customer_jwt: platformToken,
                shop: SHOP_DOMAIN,
                platform_type: PLATFORM
            }
        });

        this.subscriptionsToken = boldToken;
        this.subscriptionsCustomerId = boldCustomerID;

        this.setRefreshTokenTimeout(tokenExpTime);
    }

    static setRefreshTokenTimeout(expTime) {
        const timeoutMilliseconds = expTime - Date.now() - 60000; // 1 minute before expiration
        setTimeout(async () => {
            const {
                token,
                tokenExpTime
            } = await this.callAPI({
                method: Method.GET,
                url: "/jwt/refresh",
                params: {
                    shop: SHOP_DOMAIN,
                    platform_type: PLATFORM
                }
            });
            this.subscriptionsToken = token;
            this.setRefreshTokenTimeout(tokenExpTime);
        }, timeoutMilliseconds);
    }

    static async callAPI({method, url, params, data = null}) {
        const config = {method, baseURL: BASE_URL, url, data, params};

        if ((!this.subscriptionsToken || !this.subscriptionsCustomerId) && url !== "/login" && url !== "/jwt/refresh") {
            await this.obtainToken();
        }
        if (this.subscriptionsToken) {
            config.headers = {Authorization: `Bearer ${this.subscriptionsToken}`};
        }

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (err) {
            if (err.response?.status === 401) {
                this.subscriptionsToken = null;
                await this.callAPI(config);
            } else {
                throw err;
            }
        }
    }
}

export default ServiceBase;
