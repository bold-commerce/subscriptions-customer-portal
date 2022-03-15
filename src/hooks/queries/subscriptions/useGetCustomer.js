import { useQuery } from "react-query";
import CustomerAdapter from '../../../api/adapters/CustomerAdapter';
import CustomerService from "../../../api/services/CustomerService";

const useGetCustomer = () => {
    const { data, isLoading } = useQuery(["customer"], () =>
        CustomerService.getCustomer());

    const result = {
        customer: CustomerAdapter.fromServer(data?.customer),
        isCustomerLoading: isLoading,
    };

    return result;
};

export default useGetCustomer;