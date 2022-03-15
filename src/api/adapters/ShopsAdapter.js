import renameKeys from "../../utils/renameKeys";

class ShopsAdapter {
    static fromServer(shop) {
        return renameKeys(shop, ["shop_identifier"], ["shopID"]);
    }
}

export default ShopsAdapter;
