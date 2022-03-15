import React from "react";
import PT from "prop-types";
import styled, { css } from "styled-components";
import { Button } from "@boldcommerce/stacks-ui";

export const MessageType = {
    DEFAULT: "default",
    SUCCESS: "success",
    WARNING: "warning",
    ALERT: "alert",
    INFO: "info"
};

const MessageTypeType = PT.oneOf(Object.values(MessageType));

const MessagePropTypes = {
    type: MessageTypeType,
    text: PT.string.isRequired,
    buttonText: PT.string,
    buttonDisabled: PT.bool,
    onButtonClick: PT.func
};

const MessageDefaultProps = {
    type: "default",
    buttonDisabled: false
};

const StyledMessage = styled.div`
    position: relative;

    display: grid;
    row-gap: 4px;

    padding: 12px;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-text-default);

    border-left: 5px solid;

    ${({ type }) => {
        switch (type) {
            case MessageType.SUCCESS:
                return css`
                    border-color: #6ff03b;
                    background-color: #f7fef4;`;
            case MessageType.WARNING:
                return css`
                    border-color: #f9e53a;
                    background-color: #fefdf4;`;
            case MessageType.ALERT:
                return css`
                    border-color: #fc2036;
                    background-color: #fff3f4;`;
            case MessageType.INFO:
                return css`
                    border-color: #1964fb;
                    background-color: #f2f6ff;`;
            default:
                return css`
                    border-color: #6b6b6b;
                    background-color: #f8f8f8;`;
        }
    }}

    @media (min-width: 576px) {
        grid-template-columns: 1fr max-content;
        align-items: center;
        column-gap: 16px;
    }
`;

const Message = (props) => {
    const { type, text, buttonText, buttonDisabled, onButtonClick } = props;
    const showButton = Boolean(buttonText);

    return (
        <StyledMessage type={type}>
            { text }

            {showButton && (
                <Button disabled={buttonDisabled} onClick={onButtonClick}>
                    { buttonText }
                </Button>
            )}
        </StyledMessage>
    );
};

Message.propTypes = MessagePropTypes;
Message.defaultProps = MessageDefaultProps;

export default Message;
