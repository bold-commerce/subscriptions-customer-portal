import React from "react";
import styled from "styled-components";
import {Button} from "@boldcommerce/stacks-ui";

const StyledLoginPrompt = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 40px;
    padding-bottom: 40px;

    color: var(--color-text-default);
`;

const StyledTitle = styled.div`
    margin-bottom: 10px;

    font-size: 20px;
    font-weight: 700;
    line-height: 28px;
`;

const StyledText = styled.div`
    margin-bottom: 20px;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
`;

const LoginPrompt = () => {
    return (
        <StyledLoginPrompt>
            <StyledTitle>
                You are not logged in
            </StyledTitle>

            <StyledText>
                Please log in or create an account to see your active subscriptions
            </StyledText>
            <a href="/account/login">
                <Button className="custom-button" primary>
                    Login
                </Button>
            </a>
        </StyledLoginPrompt>
    );
};

export default LoginPrompt;
