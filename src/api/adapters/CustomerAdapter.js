import renameKeys from "../../utils/renameKeys";

class CustomerAdapter {
    static fromServer(customer) {
        return renameKeys(customer, ["bold_platform_id"], ["id"]);
    }
}

export default CustomerAdapter;