import { useMutation } from "react-query";
import SubscriptionsService, {PaymentUpdateMethod,} from "../../../api/services/SubscriptionsService";

const useUpdatePaymentMethod = (params) => {
    const { onSuccess } = params;

    const { isLoading, mutate } = useMutation(
        (args) =>
            args.updateMethod === PaymentUpdateMethod.EMAIL
                ? SubscriptionsService.updatePaymentMethodEmail(args)
                : null,
        { onSuccess }
    );

    return {
        isPaymentMethodUpdating: isLoading,
        updatePaymentMethod: mutate,
    };
};

export default useUpdatePaymentMethod;
