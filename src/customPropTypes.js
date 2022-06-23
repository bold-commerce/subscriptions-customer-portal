import PT from "prop-types";
import { SubscriptionAddress, Payment } from './const';

export const ChildType = PT.oneOfType([PT.bool, PT.number, PT.string, PT.node]);

export const ChildrenType = PT.oneOfType([ChildType, PT.arrayOf(ChildType)]);

export const AddressType = PT.oneOf([
    SubscriptionAddress.SHIPPING,
    SubscriptionAddress.BILLING,
]);

export const SubscriptionPaymentType = {
    CREDIT_CARD: "credit_card",
};

export const PaymentType = PT.oneOf([
    Payment.METHOD,
    Payment.BILLING_ADDRESS
]);
