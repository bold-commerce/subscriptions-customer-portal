import renameKeys from "../../utils/renameKeys";

class ProductsAdapter {
    static fromServer(product) {
        return renameKeys(
            product,
            ["product_name", "variant_name"],
            ["name", "variant"]
        );
    }
}

export default ProductsAdapter;
