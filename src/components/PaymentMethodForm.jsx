import { React, useContext } from "react";
import { AppStateContext } from "../AppState";
import styled from "styled-components";
import { Payment } from "../const";
import { PaymentType } from "../customPropTypes";
import { Button } from "@boldcommerce/stacks-ui";
import Section from "./ui/Section";
import { PaymentUpdateMethod } from "../api/services/SubscriptionsService";

const PaymentMethodFormPropTypes = {
    type: PaymentType.isRequired
};

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin: 16px 0;
`;

const StyledPaymentIFrame = styled.iframe``;

const PaymentMethodForm = (props) => {
    const { type } = props;
    const { appState, appActions } = useContext(AppStateContext);

    const { paymentMethod } = appState;

    const { 
        stopUpdatePaymentMethod, 
        finishUpdatePaymentMethod, 
        stopUpdateAddressBilling
    } = appActions;

    const isMethod = type === Payment.METHOD;
    const title = isMethod ? "Editing payment method" : "Editing payment billing address";

    const handleConfirmButtonClick = () => {
        finishUpdatePaymentMethod(paymentMethod.updateMethod);
    };

    const handleCancelButtonClick = () => {
        if (isMethod) {
            stopUpdatePaymentMethod();
        } else {
            stopUpdateAddressBilling();
        }
    }

    return (
        <Section title={title}>
            {paymentMethod.updateMethod === PaymentUpdateMethod.EMAIL ? (
                <>
                    <span>
                        You can change the payment {type} by clicking on the link in the
                        email
                    </span>
                    <StyledButtons>
                        <Button onClick={handleCancelButtonClick}>Cancel</Button>
                        <Button primary onClick={handleConfirmButtonClick}>Send email</Button>
                    </StyledButtons>
                </>
            ) : (
                <StyledPaymentIFrame src={paymentMethod.updateUrl.url} />
            )}
        </Section>
    );
};

PaymentMethodForm.propTypes = PaymentMethodFormPropTypes;

export default PaymentMethodForm;
