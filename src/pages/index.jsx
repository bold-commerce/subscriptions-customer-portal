import { useContext } from "react";
import styled from "styled-components";
import { LoadingSpinner } from "@boldcommerce/stacks-ui";
import { SubscriptionAddress } from "../const";
import { AppStateContext } from "../AppState";
import DefaultLayout from "../layouts/default";
import Container from "../components/ui/Container";
import NoSubscriptions from "../components/ui/NoSubscriptions";
import Tabs from "../components/ui/Tabs";
import ModalConfirm from "../components/ui/ModalConfirm";
import TopSection from "../components/TopSection";
import Address from "../components/Address";
import Interval from "../components/Interval";
import PaymentMethod from "../components/PaymentMethod";
import AddressForm from "../components/AddressForm";
import ProductList from "../components/ProductList";

const StyledTitle = styled.div`
  margin-bottom: 38px;

  text-align: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 34px;

  @media (min-width: 576px) {
    margin-bottom: 60px;
  }
`;

const StyledPaymentContent = styled.div`
  min-height: 120px;
  background-color: rgba(0, 0, 0, 0.2);
`;

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

    // subscriptions,
    isAppLoadingInitial,
    isAppLoading,
    showShippingAddressForm,
    showBillingAddressForm,
    showIntervalForm,
    showPaymentMethodForm,
    showModalPause,
    showModalCancel
  } = appState;

  const {
    stopPauseSubscription,
    finishPauseSubscription,
    stopCancelSubscription,
    finishCancelSubscription
  } = appActions;

  const handlePauseModalConfirm = () => finishPauseSubscription();
  const handlePauseModalCancel = () => stopPauseSubscription();
  const handleCancelModalConfirm = () => finishCancelSubscription();
  const handleCancelModalCancel = () => stopCancelSubscription();

  const showSpinner = isAppLoadingInitial;
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

        {showNoSubscriptions && (
          <>
            <StyledTitle>My Subscriptions</StyledTitle>
            <NoSubscriptions />
          </>
        )}

        {showSubscriptions && (
          <>
            <StyledTitle>My Subscriptions</StyledTitle>
            <StyledTopSectionContainer>
              <TopSection />
            </StyledTopSectionContainer>
            <Tabs
              tabs={[
                {
                  content: <Address type={SubscriptionAddress.SHIPPING} />,
                  isActive: showShippingAddressForm
                },
                {
                  content: <Address type={SubscriptionAddress.BILLING} />,
                  isActive: showBillingAddressForm
                },
                {
                  content: (
                    <StyledIntervalAndPaymentMethod>
                      <Interval />
                      <PaymentMethod />
                    </StyledIntervalAndPaymentMethod>
                  ),
                  isActive: showIntervalForm || showPaymentMethodForm
                }
              ]}
            />
            {showShippingAddressForm && (
              <AddressForm type={SubscriptionAddress.SHIPPING} />
            )}
            {showBillingAddressForm && (
              <AddressForm type={SubscriptionAddress.BILLING} />
            )}
            {showPaymentMethodForm && (
              <StyledPaymentContent />
            )}
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
