import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Message, { MessageType } from "./Message";

const StyledNotificationContainer = styled(ToastContainer)`
    @media (min-width: 768px) {
        width: 600px;
    }

    .Toastify__toast {
        background-color: #f7fef4;
        box-shadow: none;
    }
`;

export const NotificationContainer = () => {
    return (
        <StyledNotificationContainer
            position="bottom-center"
            closeButton={true}
            draggable={false}
            hideProgressBar
            newestOnTop
        />
    );
};

export class Notify {
    static default(text) {
        toast(<Message type={MessageType.DEFAULT} text={text} />);
    }

    static success(text) {
        toast(<Message type={MessageType.SUCCESS} text={text} />);
    }

    static warning(text) {
        toast(<Message type={MessageType.WARNING} text={text} />);
    }

    static alert(text) {
        toast(<Message type={MessageType.ALERT} text={text} />);
    }

    static info(text) {
        toast(<Message type={MessageType.INFO} text={text} />);
    }
}
