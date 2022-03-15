import { React, useEffect } from "react";
import PT from "prop-types";
import styled from "styled-components";
import { ChildrenType } from "../../customPropTypes";

const ModalPropTypes = {
    children: ChildrenType.isRequired,
    disabled: PT.bool,
    onClose: PT.func
};

const ModalDefaultProps = {
    disabled: false
};

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 7;

    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);

    overflow: auto;

    &::after {
        content: "";

        display: inline-block;
        height: 100%;

        vertical-align: middle;
    }
`;

const StyledModalContainer = styled.div`
    width: 100%;
    max-width: 638px;
    display: inline-block;

    text-align: left;
    vertical-align: middle;
`;

const StyledModalContent = styled.div`
    margin: 16px;
    padding: 32px;

    border-radius: 8px;

    background-color: #ffffff;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
`;

const Modal = (props) => {
    const { children, disabled, onClose } = props;

    useEffect(() => {
        const handleKeydown = (event) => {
            const { key } = event;
            if (!disabled && key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeydown);
        return () => document.removeEventListener("keydown", handleKeydown);
    }, []);

    const handleOverlayClick = (event) => {
        const { target, currentTarget } = event;
        if (!disabled && target === currentTarget) onClose();
    };

    return (
        <StyledModal onClick={handleOverlayClick}>
            <StyledModalContainer>
                <StyledModalContent>
                    { children }
                </StyledModalContent>
            </StyledModalContainer>
        </StyledModal>
    );
};

Modal.propTypes = ModalPropTypes;
Modal.defaultProps = ModalDefaultProps;

export default Modal;
