import { useQuery } from "react-query";
import SubscriptionsService from "../../../api/services/SubscriptionsService";

const useGetIntervals = (params) => {
    const { subscriptionID } = params;

    const { data, isLoading } = useQuery(
        ["intervals", params],
        () => SubscriptionsService.getIntervals(params),
        { enabled: Boolean(subscriptionID) }
    );

    return {
        intervals: data,
        areIntervalsLoading: isLoading,
    };
};

export default useGetIntervals;
