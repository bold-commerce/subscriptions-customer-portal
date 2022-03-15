import { useMutation } from "react-query";
import SubscriptionsService from "../../../api/services/SubscriptionsService";

const useCancelSubscription = (params) => {
    const { onSuccess } = params;

    const { isLoading, mutate } = useMutation(
        (params) => SubscriptionsService.cancelSubscription(params),
        { onSuccess }
    );

    return {
        isSubscriptionCancelling: isLoading,
        cancelSubscription: mutate,
    };
};

export default useCancelSubscription;
