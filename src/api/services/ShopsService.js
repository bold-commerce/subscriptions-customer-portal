import { ServiceBase } from "../core";


class ShopsService {
  static async getSubscriptionShopInfo(options) {
    const { shopIdentifier } = options;

    const method = "GET";
    const url = `/subscriptions/v1/shops/${shopIdentifier}/shop`;

    const response = await ServiceBase.callApi({ method, url });

    return response;
  }

  static async getShopInfo() {
    const method = "GET";
    const url = "/shops/v1/info";

    const response = await ServiceBase.callApi({ method, url });

    return response;
  }
}

export default ShopsService;
