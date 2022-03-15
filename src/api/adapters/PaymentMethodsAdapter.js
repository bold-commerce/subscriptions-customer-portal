import renameKeys from "../../utils/renameKeys";

class PaymentMethodsAdapter {
    static fromServer(paymentMethod) {
        return renameKeys(
            paymentMethod,
            ["cc_type", "last_four", "update_method", "update_url"],
            ["system", "lastFourDigits", "updateMethod", "updateUrl"]
        );
    }
}

export default PaymentMethodsAdapter;
