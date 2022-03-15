import React from "react";
import PT from "prop-types";
import styled from "styled-components";
import { Button } from "@boldcommerce/stacks-ui";
import Modal from "./Modal";

const ModalConfirmPropTypes = {
    title: PT.string,
    description: PT.string,
    textButtonCancel: PT.string,
    textButtonConfirm: PT.string,
    disabled: PT.bool,
    onConfirm: PT.func,
    onCancel: PT.func
};

const ModalConfirmDefaultProps = {
    title: "Are you sure you want to continue?",
    textButtonCancel: "Cancel",
    textButtonConfirm: "Confirm",
    disabled: false
};

const StyledModalConfirm = styled.div`
    display: grid;
    row-gap: 12px;
`;

const StyledTitle = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const StyledDescription = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

const StyledButtons = styled.div`
  display: grid;
  row-gap: 12px;

  @media (min-width: 375px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const ModalConfirm = (props) => {
    const {
        title,
        description,
        textButtonCancel,
        textButtonConfirm,
        disabled,
        onConfirm,
        onCancel
    } = props;

    return (
        <Modal disabled={disabled} onClose={onCancel}>
            <StyledModalConfirm>
                <StyledTitle>
                    { title }
                </StyledTitle>

                {description && (
                    <StyledDescription>
                        { description }
                    </StyledDescription>
                )}

                <StyledButtons>
                    <Button
                        className="button-ModalConfirm"
                        block
                        disabled={disabled}
                        onClick={onCancel}
                    >
                        { textButtonCancel }
                    </Button>
                    <Button
                        className="button-ModalConfirm"
                        block
                        primary
                        disabled={disabled}
                        onClick={onConfirm}
                    >
                        { textButtonConfirm }
                    </Button>
                </StyledButtons>
            </StyledModalConfirm>
        </Modal>
    );
};

ModalConfirm.propTypes = ModalConfirmPropTypes;
ModalConfirm.defaultProps = ModalConfirmDefaultProps;

export default ModalConfirm;
