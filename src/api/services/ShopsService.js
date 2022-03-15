import ServiceBase, { Method } from "../core";
import ShopsAdapter from "../adapters/ShopsAdapter";

class ShopsService extends ServiceBase {
    static async getShop() {
        const method = Method.GET;
        const url = "/shops/v1/info";

        const shop = await this.callAPI({ method, url });

        return ShopsAdapter.fromServer(shop);
    }
}

export default ShopsService;
