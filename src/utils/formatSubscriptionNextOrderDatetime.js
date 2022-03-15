const formatSubscriptionNextOrderDatetime = (subscription) => {
    if (!subscription) return null;

    const { nextOrderDatetime } = subscription;

    return new Date(nextOrderDatetime).toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

export default formatSubscriptionNextOrderDatetime;
