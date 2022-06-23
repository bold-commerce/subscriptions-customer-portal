import React from "react";
import PT from "prop-types";
import styled from "styled-components";
import Icon from "./Icon/Icon";

const TitleWithEditButtonPropTypes = {
    title: PT.string.isRequired,
    editButtonLabel: PT.string,
    showEditButton: PT.bool,
    editButtonDisabled: PT.bool,
    onEditButtonClick: PT.func
};

const TitleWithEditButtonDefaultProps = {
    showEditButton: false,
    editButtonDisabled: false
};

const StyledTitleWithEditButton = styled.div`
    display: grid;
    grid-template-columns: max-content min-content;
    align-items: center;
    column-gap: 10px;

    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--color-text-default);
`;

const StyledEditButtonWrapper = styled.div`
    position: relative;
`;

const StyledEditButton = styled.button`
    position: absolute;
    top: 50%;
    left: 0;

    display: grid;

    transform: translateY(-56%);

    &:disabled {
        opacity: 0.4;
    }
`;

const TitleWithEditButton = (props) => {
    const {
        title,
        editButtonLabel,
        showEditButton,
        editButtonDisabled,
        onEditButtonClick
    } = props;

    const handleEditButtonClick = () => {
        if (onEditButtonClick) onEditButtonClick();
    };

    return (
        <StyledTitleWithEditButton>
            {title}

            {showEditButton && (
                <StyledEditButtonWrapper>
                    <StyledEditButton
                        type="button"
                        aria-label={editButtonLabel}
                        disabled={editButtonDisabled}
                        onClick={handleEditButtonClick}
                    >
                        <Icon name="edit" height={18} width={18}/>
                    </StyledEditButton>
                </StyledEditButtonWrapper>
            )}

        </StyledTitleWithEditButton>
    );
};

TitleWithEditButton.propTypes = TitleWithEditButtonPropTypes;
TitleWithEditButton.defaultProps = TitleWithEditButtonDefaultProps;

export default TitleWithEditButton;
