import { React, useContext } from "react";
import styled from "styled-components";
import { SubscriptionAddress } from "../const";
import { AddressType } from "../customPropTypes";
import { AppStateContext } from "../AppState";
import TitleWithEditButton from "./ui/TitleWithEditButton";

const AddressPropTypes = {
    type: AddressType.isRequired
};

const StyledAddress = styled.div`
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: var(--color-text-default);

    @media (min-width: 576px) {
        line-height: 18px;
    }
`;

const StyledTitle = styled.div`
    margin-bottom: 9px;
`;

const StyledFullName = styled.div`
    font-weight: 700;
`;

const Address = (props) => {
    const { type } = props;
    const { appState, appActions } = useContext(AppStateContext);

    const {
        subscription,
        isAppLoading,
        isSubscriptionActive,
        showShippingAddressForm,
        showPaymentBillingAddressForm
    } = appState;

    const {
        startUpdateAddressShipping,
        startUpdateAddressBilling
    } = appActions;

    const isShipping = type === SubscriptionAddress.SHIPPING;
    const address = isShipping ? subscription.shippingAddress : subscription.billingAddress;

    const {
        firstName,
        lastName,
        lineFirst,
        lineSecond,
        city,
        state,
        zip,
        country,
        company,
        phone
    } = address;

    const title = isShipping ? "Shipping address" : "Billing address";
    const editButtonLabel = isShipping ? "Edit shipping address" : "Edit billing address";
    const showForm = isShipping ? showShippingAddressForm : showPaymentBillingAddressForm;
    const showEditButton = isSubscriptionActive && !showForm;

    const handleEditButtonClick = () => {
        if (isShipping) {
            startUpdateAddressShipping();
        } else {
            startUpdateAddressBilling();
        }
    };

    return (
        <StyledAddress>
            <StyledTitle>
                <TitleWithEditButton
                    title={title}
                    editButtonLabel={editButtonLabel}
                    showEditButton={showEditButton}
                    editButtonDisabled={isAppLoading}
                    onEditButtonClick={handleEditButtonClick}
                />
            </StyledTitle>
            <StyledFullName>
                { firstName } { lastName }
            </StyledFullName>
            { lineFirst }<br />
            { lineSecond && <>{ lineSecond }<br /></> }
            { city }, { state }, { zip }<br />
            { country }<br />
            { company && <>Company: { company }<br /></> }
            { phone && <>Phone: { phone }</>}
        </StyledAddress>
    );
};

Address.propTypes = AddressPropTypes;

export default Address;
