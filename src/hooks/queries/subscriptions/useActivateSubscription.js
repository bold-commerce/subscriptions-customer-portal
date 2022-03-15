import { useMutation } from "react-query";
import SubscriptionsService from "../../../api/services/SubscriptionsService";

const useActivateSubscription = (params) => {
    const { onSuccess } = params;

    const { isLoading, mutate } = useMutation(
        (params) => SubscriptionsService.activateSubscription(params),
        { onSuccess }
    );

    return {
        isSubscriptionActivating: isLoading,
        activateSubscription: mutate,
    };
};

export default useActivateSubscription;
