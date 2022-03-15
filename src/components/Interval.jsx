import { React, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Button, SelectField, LoadingSpinner } from "@boldcommerce/stacks-ui";
import formatIntervalOption from "../utils/formatIntervalOption";
import { AppStateContext } from "../AppState";
import TitleWithEditButton from "./ui/TitleWithEditButton";

const StyledTitle = styled.div`
    margin-bottom: 10px;
`;

const StyledForm = styled.div`
    display: grid;
    grid-template-columns: 50% max-content;
    column-gap: 16px;

    @media (min-width: 576px) {
        column-gap: 20px;
    }

    @media (min-width: 768px) {
        row-gap: 10px;
        grid-template-columns: 1fr;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 50% max-content;
    }
`;

const StyledDescription = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
`;

const StyledButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;

    @media (min-width: 768px) {
        grid-template-columns: max-content max-content;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
`;

const Interval = () => {
    const { appState, appActions } = useContext(AppStateContext);

    const {
        subscription,
        intervals,
        isAppLoading,
        areIntervalsLoading,
        isSubscriptionActive,
        showIntervalForm
    } = appState;

    const {
        startUpdateInterval,
        stopUpdateInterval,
        finishUpdateInterval
    } = appActions;

    const [intervalID, setIntervalID] = useState(null);

    useEffect(() => {
        if (!subscription || !intervals) return;

        const { id } = intervals.find((interval) => interval.name === subscription.interval);
        setIntervalID(id);
    }, [subscription, intervals]);

    const intervalOptions = intervals?.map(formatIntervalOption);
    const showEditButton = !areIntervalsLoading && isSubscriptionActive && !showIntervalForm;

    const handleIntervalChange = (event) => {
        const intervalID = Number(event.target.value);
        setIntervalID(intervalID);
    };

    const handleEditButtonClick = () => startUpdateInterval();
    const handleConfirmButtonClick = () => finishUpdateInterval(intervalID);
    const handleCancelButtonClick = () => stopUpdateInterval();

    return (
        <div>
            <StyledTitle>
                <TitleWithEditButton
                    title="Order frequency"
                    editButtonLabel="Change frequency"
                    showEditButton={showEditButton}
                    editButtonDisabled={isAppLoading}
                    onEditButtonClick={handleEditButtonClick}
                />
            </StyledTitle>
            {areIntervalsLoading ? (
                <LoadingSpinner />
            ) : showIntervalForm ? (
                <StyledForm>
                    <SelectField
                        placeholder={intervalID ? "" : "Select interval"}
                        value={intervalID}
                        options={intervalOptions}
                        disabled={isAppLoading}
                        onChange={handleIntervalChange}
                    />
                    <StyledButtons>
                        <Button
                            className="custom-button"
                            primary
                            disabled={isAppLoading}
                            onClick={handleConfirmButtonClick}
                        >
                            Save
                        </Button>
                        <Button
                            className="custom-button"
                            disabled={isAppLoading}
                            onClick={handleCancelButtonClick}
                        >
                            Cancel
                        </Button>
                    </StyledButtons>
                </StyledForm>
            ) : (
                <StyledDescription>
                    { subscription.interval }
                </StyledDescription>
            )}
        </div>
    );
};

export default Interval;
