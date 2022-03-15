import { useQuery } from "react-query";
import ShopsService from "../../../api/services/ShopsService";

const useGetShop = () => {
    const { data, isLoading } = useQuery(["shop"], () =>
        ShopsService.getShop());

    return {
        shop: data,
        isShopLoading: isLoading,
    };
};

export default useGetShop;
