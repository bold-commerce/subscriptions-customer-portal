import { useMutation } from "react-query";
import SubscriptionsService from "../../../api/services/SubscriptionsService";

const useUpdateInterval = (params) => {
    const { onSuccess } = params;

    const { isLoading, mutate } = useMutation(
        (params) => SubscriptionsService.updateInterval(params),
        { onSuccess }
    );

    return {
        isIntervalUpdating: isLoading,
        updateInterval: mutate,
    };
};

export default useUpdateInterval;
