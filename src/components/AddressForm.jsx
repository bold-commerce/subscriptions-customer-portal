import { React, useState, useContext } from "react";
import styled from "styled-components";
import { Button, InputField, SelectField } from "@boldcommerce/stacks-ui";
import getCountries from "../utils/getCountries";
import getStatesOfCountry from "../utils/getStatesOfCountry";
import formatCountryOption from "../utils/formatCountryOption";
import formatStateOption from "../utils/formatStateOption";
import { AppStateContext } from "../AppState";
import Section from "./ui/Section";
import FormLayout from "./ui/FormLayout";
import FieldsLayout from "./ui/FieldsLayout";

const StyledAddressForm = styled.div`
    padding-bottom: 30px;
`;

const StyledButtonsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: end;
    column-gap: 16px;
`;

const StyledAddressFormSecondRow = styled.div`
    width: 48%;

    @media (min-width: 576px) {
        width: 100%;
    }
`;

const AddressForm = () => {
    const { appState, appActions } = useContext(AppStateContext);

    const {
        subscription,
        addressFormErrors,
        isAppLoading
    } = appState;

    const {
        stopUpdateAddressShipping,
        finishUpdateAddressShipping
    } = appActions;

    const initialAddress = subscription.shippingAddress;
    const [address, setAddress] = useState(initialAddress);

    const {
        firstName,
        lastName,
        lineFirst,
        lineSecond,
        countryCode,
        stateCode,
        city,
        zip,
        phone,
        company
    } = address;

    const title = "Editing shipping address";

    const countries = getCountries();
    const states = getStatesOfCountry(countryCode);

    const countryOptions = countries.map(formatCountryOption);
    const stateOptions = states.map(formatStateOption);

    const handleFieldChange = (event, key) => setAddress((prev) => {
        const { value } = event.target;
        return { ...prev, [key]: value };
    });

    const handleCountryFieldChange = (event) => {
        const { value: countryCode } = event.target;
        const { name: country } = countryOptions.find((option) => option.value === countryCode);
        setAddress((prev) => ({ ...prev, country, countryCode, state: "", stateCode: "", city: "" }));
    };

    const handleStateFieldChange = (event) => {
        const { value: stateCode } = event.target;
        const { name: state } = stateOptions.find((option) => option.value === stateCode);
        setAddress((prev) => ({ ...prev, state, stateCode, city: "" }));
    };

    const handleConfirmButtonClick = () => {
        finishUpdateAddressShipping(address);
    };

    const handleCancelButtonClick = () => {
        stopUpdateAddressShipping();
    };

    const capFirstName = firstName && firstName[0].toUpperCase() + firstName.slice(1);

    return (
        <Section title={title}>
            <StyledAddressForm>
                <FormLayout>
                    <FieldsLayout>
                        <InputField
                            value={capFirstName}
                            label="First name"
                            placeholder="Enter first name"
                            messageType={addressFormErrors?.firstName && "alert"}
                            messageText={addressFormErrors?.firstName}
                            disabled={isAppLoading}
                            onInput={(event) => handleFieldChange(event, "firstName")}
                        />
                        <InputField
                            value={lastName}
                            label="Last name"
                            placeholder="Enter last name"
                            messageType={addressFormErrors?.lastName && "alert"}
                            messageText={addressFormErrors?.lastName}
                            disabled={isAppLoading}
                            onInput={(event) => handleFieldChange(event, "lastName")}
                        />
                        <InputField
                            value={lineFirst}
                            label="Address line 1"
                            placeholder="Enter address line 1"
                            messageType={addressFormErrors?.lineFirst && "alert"}
                            messageText={addressFormErrors?.lineFirst}
                            disabled={isAppLoading}
                            onInput={(event) => handleFieldChange(event, "lineFirst")}
                        />
                        <InputField
                            value={lineSecond}
                            label="Address line 2"
                            placeholder="Enter address line 2"
                            messageType={addressFormErrors?.lineSecond && "alert"}
                            messageText={addressFormErrors?.lineSecond}
                            disabled={isAppLoading}
                            onInput={(event) => handleFieldChange(event, "lineSecond")}
                        />
                    </FieldsLayout>

                    <StyledAddressFormSecondRow>
                        <FieldsLayout>
                            <SelectField
                                options={countryOptions}
                                value={countryCode}
                                label="Country"
                                placeholder={countryCode ? "" : "Select country"}
                                messageType={addressFormErrors?.country && "alert"}
                                messageText={addressFormErrors?.country}
                                disabled={isAppLoading}
                                onChange={handleCountryFieldChange}
                            />
                            <SelectField
                                options={stateOptions}
                                value={stateCode}
                                label="State/Province"
                                placeholder={stateCode ? "" : "Select state/province"}
                                messageType={addressFormErrors?.state && "alert"}
                                messageText={addressFormErrors?.state}
                                disabled={isAppLoading || stateOptions.length === 0}
                                onChange={handleStateFieldChange}
                            />
                            <InputField
                                value={city}
                                label="City"
                                placeholder="Enter city"
                                messageType={addressFormErrors?.city && "alert"}
                                messageText={addressFormErrors?.city}
                                disabled={isAppLoading}
                                onInput={(event) => handleFieldChange(event, "city")}
                            />
                        </FieldsLayout>
                    </StyledAddressFormSecondRow>

                    <FieldsLayout>
                        <InputField
                            value={zip}
                            label="Zip/Postal code"
                            placeholder="Enter zip/postal code"
                            messageType={addressFormErrors?.zip && "alert"}
                            messageText={addressFormErrors?.zip}
                            disabled={isAppLoading}
                            onInput={(event) => handleFieldChange(event, "zip")}
                        />
                        <InputField
                            value={phone}
                            label="Phone number"
                            placeholder="Enter phone number"
                            messageType={addressFormErrors?.phone && "alert"}
                            messageText={addressFormErrors?.phone}
                            disabled={isAppLoading}
                            onInput={(event) => handleFieldChange(event, "phone")}
                        />
                        <InputField
                            value={company}
                            label="Company name (optional)"
                            placeholder="Enter company name"
                            messageType={addressFormErrors?.company && "alert"}
                            messageText={addressFormErrors?.company}
                            disabled={isAppLoading}
                            onInput={(event) => handleFieldChange(event, "company")}
                        />
                    </FieldsLayout>

                    <StyledButtonsWrapper>
                        <Button
                            disabled={isAppLoading}
                            onClick={handleCancelButtonClick}
                        >
                            Discard changes
                        </Button>
                        <Button
                            primary
                            disabled={isAppLoading}
                            onClick={handleConfirmButtonClick}
                        >
                            Save changes
                        </Button>
                    </StyledButtonsWrapper>

                </FormLayout>
            </StyledAddressForm>
        </Section>
    );
};

export default AddressForm;
