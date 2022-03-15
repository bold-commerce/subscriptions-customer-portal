import { React, useContext } from "react";
import styled from "styled-components";
import { LoadingSpinner } from "@boldcommerce/stacks-ui";
import { SubscriptionAddress, Payment } from "../const";
import { AppStateContext } from "../AppState";
import DefaultLayout from "../layouts/default";
import Container from "../components/ui/Container";
import LoginPrompt from '../components/ui/LoginPrompt';
import NoSubscriptions from "../components/ui/NoSubscriptions";
import Tabs from "../components/ui/Tabs";
import ModalConfirm from "../components/ui/ModalConfirm";
import TopSection from "../components/TopSection";
import Address from "../components/Address";
import Interval from "../components/Interval";
import PaymentMethod from "../components/PaymentMethod";
import AddressForm from "../components/AddressForm";
import ProductList from "../components/ProductList";
import PaymentForm from "../components/PaymentForm";

const StyledTopSectionContainer = styled.div`
    margin-bottom: 30px;
`;

const StyledFullPageSpinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`;

const StyledIntervalAndPaymentMethod = styled.div`
    display: grid;
    align-content: space-between;
    row-gap: 32px;
`;

const IndexPage = () => {
    const { appState, appActions } = useContext(AppStateContext);

    const {
        subscription,
        isAppLoadingInitial,
        isAppLoading,
        showShippingAddressForm,
        showPaymentBillingAddressForm,
        showIntervalForm,
        showPaymentMethodForm,
        showModalPause,
        showModalCancel,
        customerID,
    } = appState;

    const {
        stopPauseSubscription,
        finishPauseSubscription,
        stopCancelSubscription,
        finishCancelSubscription,
    } = appActions;

    const handlePauseModalConfirm = () => finishPauseSubscription();
    const handlePauseModalCancel = () => stopPauseSubscription();
    const handleCancelModalConfirm = () => finishCancelSubscription();
    const handleCancelModalCancel = () => stopCancelSubscription();

    const showSpinner = isAppLoadingInitial;
    const showLoginPrompt = !showSpinner && !customerID;
    const showNoSubscriptions = !showSpinner && !subscription;
    const showSubscriptions = !showSpinner && !showNoSubscriptions;

    return (
        <DefaultLayout>
            <Container>
                {showSpinner && (
                    <StyledFullPageSpinner>
                        <LoadingSpinner />
                    </StyledFullPageSpinner>
                )}

                {
                    showLoginPrompt ? <LoginPrompt /> :
                        showNoSubscriptions ? <NoSubscriptions /> :
                            null
                }

                {showSubscriptions && (
                    <>
                        <StyledTopSectionContainer>
                            <TopSection />
                        </StyledTopSectionContainer>
                        <Tabs
                            tabs={[
                                {
                                    content: <Address type={SubscriptionAddress.SHIPPING} />,
                                    isActive: showShippingAddressForm,
                                },
                                {
                                    content: <Address type={SubscriptionAddress.BILLING} />,
                                    isActive: showPaymentBillingAddressForm,
                                },
                                {
                                    content: (
                                        <StyledIntervalAndPaymentMethod>
                                            <Interval />
                                            <PaymentMethod />
                                        </StyledIntervalAndPaymentMethod>
                                    ),
                                    isActive: showIntervalForm || showPaymentMethodForm,
                                },
                            ]}
                        />
                        {showShippingAddressForm && <AddressForm />}
                        {showPaymentBillingAddressForm && <PaymentForm type={Payment.BILLING_ADDRESS}/>}
                        {showPaymentMethodForm && <PaymentForm type={Payment.METHOD} />}
                        <ProductList />
                    </>
                )}

                {showModalPause && (
                    <ModalConfirm
                        title="Are you sure you want to pause this subscription?"
                        description="This will pause all orders until the subscription is resumed"
                        textButtonCancel="No, don’t pause"
                        textButtonConfirm="Yes, pause"
                        disabled={isAppLoading}
                        onConfirm={handlePauseModalConfirm}
                        onCancel={handlePauseModalCancel}
                    />
                )}

                {showModalCancel && (
                    <ModalConfirm
                        title="Are you sure you want to cancel this subscription?"
                        description="This will cancel your subscription and all unprocessed orders"
                        textButtonCancel="No, don’t cancel"
                        textButtonConfirm="Yes, cancel"
                        disabled={isAppLoading}
                        onConfirm={handleCancelModalConfirm}
                        onCancel={handleCancelModalCancel}
                    />
                )}
            </Container>
        </DefaultLayout>
    );
};

export default IndexPage;
