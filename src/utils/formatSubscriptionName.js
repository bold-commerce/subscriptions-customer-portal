const formatSubscriptionName = (subscription) => {
    if (!subscription) return null;

    const { id, products } = subscription;

    const productName =
        products.length === 1 ? products[0].name : `${products.length} Product`;

    return `${productName} Subscription — #${id}`;
};

export default formatSubscriptionName;
