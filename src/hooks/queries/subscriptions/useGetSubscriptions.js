import { useQuery } from "react-query";
import SubscriptionsService from "../../../api/services/SubscriptionsService";

const useGetSubscriptions = (params) => {
    const { onSuccess } = params;

    const { data, isLoading, refetch } = useQuery(
        ["subscriptions"],
        () => SubscriptionsService.getSubscriptions(),
        { onSuccess }
    );

    return {
        subscriptions: data,
        areSubscriptionsLoading: isLoading,
        refetchSubscriptions: refetch,
    };
};

export default useGetSubscriptions;
