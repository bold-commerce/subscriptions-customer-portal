import renameKeys from "../../utils/renameKeys";

class AddressesAdapter {
    static fromServer(address, addressId) {
        return {
            id: addressId,
            ...renameKeys(
                address,
                [
                    "first_name",
                    "last_name",
                    "street1",
                    "street2",
                    "country_code",
                    "province",
                    "province_code",
                ],
                [
                    "firstName",
                    "lastName",
                    "lineFirst",
                    "lineSecond",
                    "countryCode",
                    "state",
                    "stateCode",
                ]
            ),
        };
    }

    static toServer(address) {
        return renameKeys(
            address,
            [
                "firstName",
                "lastName",
                "lineFirst",
                "lineSecond",
                "countryCode",
                "state",
                "stateCode",
            ],
            [
                "first_name",
                "last_name",
                "street1",
                "street2",
                "country_code",
                "province",
                "province_code",
            ]
        );
    }

    static errorUpdate(error) {
        const { message, errors } = error.response.data;

        const adaptedError = new Error(message);

        adaptedError.fieldErrors = renameKeys(
            errors,
            [
                "customer_address.first_name",
                "customer_address.last_name",
                "customer_address.street1",
                "customer_address.street2",
                "customer_address.country",
                "customer_address.province",
                "customer_address.city",
                "customer_address.zip",
                "customer_address.phone",
                "customer_address.company",
            ],
            [
                "firstName",
                "lastName",
                "lineFirst",
                "lineSecond",
                "country",
                "state",
                "city",
                "zip",
                "phone",
                "company",
            ]
        );

        return adaptedError;
    }
}

export default AddressesAdapter;
