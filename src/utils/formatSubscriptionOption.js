import formatSubscriptionName from "./formatSubscriptionName";

const formatSubscriptionOption = (subscription) => {
    if (!subscription) return null;

    const { id: value } = subscription;
    const name = formatSubscriptionName(subscription);
    return { name, value };
};

export default formatSubscriptionOption;
