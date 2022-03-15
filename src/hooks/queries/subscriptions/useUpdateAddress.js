import { useMutation } from "react-query";
import SubscriptionsService from "../../../api/services/SubscriptionsService";

const useUpdateAddress = (params) => {
    const { onSuccess, onError } = params;

    const { isLoading, mutate } = useMutation(
        (params) => SubscriptionsService.updateAddress(params),
        { onSuccess, onError }
    );

    return {
        isAddressUpdating: isLoading,
        updateAddress: mutate,
    };
};

export default useUpdateAddress;
