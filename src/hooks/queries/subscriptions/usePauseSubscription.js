import { useMutation } from "react-query";
import SubscriptionsService from "../../../api/services/SubscriptionsService";

const usePauseSubscription = (params) => {
    const { onSuccess } = params;

    const { isLoading, mutate } = useMutation(
        (params) => SubscriptionsService.pauseSubscription(params),
        { onSuccess }
    );

    return {
        isSubscriptionPausing: isLoading,
        pauseSubscription: mutate,
    };
};

export default usePauseSubscription;
