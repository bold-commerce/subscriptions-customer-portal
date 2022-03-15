import { React, useContext } from "react";
import styled from "styled-components";
import { SelectField } from "@boldcommerce/stacks-ui";
import { SubscriptionAction } from "../const";
import formatSubscriptionOption from "../utils/formatSubscriptionOption";
import formatSubscriptionName from "../utils/formatSubscriptionName";
import formatSubscriptionNextOrderDatetime from "../utils/formatSubscriptionNextOrderDatetime";
import { AppStateContext } from "../AppState";
import Menu, { MenuItemType } from "./ui/Menu";
import Message from "./ui/Message";

const StyledTopSection = styled.div`
    display: grid;
    row-gap: 20px;

    @media (min-width: 576px) {
        row-gap: 26px;
    }
`;

const StyledSubscriptionInfo = styled.div`
    display: grid;
    row-gap: 10px;

    @media (min-width: 576px) {
        display: block;
    }
`;

const StyledSubscriptionInfoTop = styled.div`
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    justify-content: start;
    column-gap: 20px;
`;

const StyledSubscriptionName = styled.h2`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
`;

const StyledSubscriptionInfoBottom = styled.div`
    font-size: 14px;
    line-height: 20px;
`;

const StyledSubscriptionDate = styled.span`
    font-weight: 700;
`;

const StyledSubscriptionMessage = styled.div`
    margin-top: 14px;
`;

const TopSection = () => {
    const { appState, appActions } = useContext(AppStateContext);

    const {
        subscriptions,
        subscription,
        subscriptionID,
        isAppLoading,
        isSubscriptionActive,
        isSubscriptionInactive,
        isSubscriptionPaused
    } = appState;

    const {
        viewSubscription,
        startPauseSubscription,
        startCancelSubscription,
        activateSubscription
    } = appActions;

    const subscriptionOptions = subscriptions.map(formatSubscriptionOption);
    const showSubscriptionsSelect = subscriptionOptions.length > 1;
    const subscriptionName = formatSubscriptionName(subscription);
    const subscriptionNextOrderDatetime = formatSubscriptionNextOrderDatetime(subscription);

    const menuItems = [
        {
            name: "Pause subscription",
            value: SubscriptionAction.PAUSE
        },
        {
            type: MenuItemType.ALERT,
            name: "Cancel subscription",
            value: SubscriptionAction.CANCEL
        }
    ];

    const handleSubscriptionChange = (event) => {
        const subscriptionID = Number(event.target.value);
        viewSubscription(subscriptionID);
    };

    const handleMenuItemClick = (item) => {
        const action = item.value;
        if (action === SubscriptionAction.PAUSE) startPauseSubscription();
        if (action === SubscriptionAction.CANCEL) startCancelSubscription();
    };

    return (
        <StyledTopSection>
            {showSubscriptionsSelect && (
                <SelectField
                    className="subscription-select-TopSection"
                    options={subscriptionOptions}
                    value={subscriptionID}
                    label="Subscriptions"
                    disabled={isAppLoading}
                    onChange={handleSubscriptionChange}
                />
            )}

            <StyledSubscriptionInfo>
                <StyledSubscriptionInfoTop>
                    <StyledSubscriptionName>
                        { subscriptionName }
                    </StyledSubscriptionName>
                    {isSubscriptionActive && (
                        <Menu
                            items={menuItems}
                            disabled={isAppLoading}
                            onItemClick={handleMenuItemClick}
                        />
                    )}
                </StyledSubscriptionInfoTop>
                {isSubscriptionActive && (
                    <StyledSubscriptionInfoBottom>
                        <StyledSubscriptionDate>Next Order: </StyledSubscriptionDate>
                        { subscriptionNextOrderDatetime }
                    </StyledSubscriptionInfoBottom>
                )}
                {isSubscriptionInactive && (
                    <StyledSubscriptionMessage>
                        <Message
                            text="This subscription has been canceled"
                            buttonText="Reactivate subscription"
                            buttonDisabled={isAppLoading}
                            onButtonClick={activateSubscription}
                        />
                    </StyledSubscriptionMessage>
                )}
                {isSubscriptionPaused && (
                    <StyledSubscriptionMessage>
                        <Message
                            text="This subscription has been paused"
                            buttonText="Resume subscription"
                            buttonDisabled={isAppLoading}
                            onButtonClick={activateSubscription}
                        />
                    </StyledSubscriptionMessage>
                )}
            </StyledSubscriptionInfo>
        </StyledTopSection>
    );
};

export default TopSection;
