import { React, useEffect, useRef, useState } from "react";
import PT from "prop-types";
import styled, { css } from "styled-components";
import Icon from "./Icon/Icon";

export const MenuItemType = {
    DEFAULT: "default",
    ALERT: "alert"
};

const ItemTypeType = PT.oneOf([
    MenuItemType.DEFAULT,
    MenuItemType.ALERT
]);

const ItemType = {
    type: ItemTypeType,
    name: PT.string.isRequired,
    value: PT.string.isRequired
};

const MenuPropTypes = {
    items: PT.arrayOf(PT.shape(ItemType)).isRequired,
    disabled: PT.bool,
    onItemClick: PT.func
};

const MenuDefaultProps = {
    disabled: false
};

const StyledMenu = styled.div`
    position: relative;
    z-index: 2;
`;

const StyledItems = styled.div`
    position: absolute;
    top: calc(100% + 20px);
    right: -12px;

    width: 280px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    background-color: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);

    &::after,
    &::before {
        content: "";

        position: absolute;
        top: 4px;
        right: 22px;

        width: 31px;
        height: 28px;

        background-color: #ffffff;

        transform: rotate(45deg) translateY(-50%);
        pointer-events: none;
    }

    &::after {
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
        z-index: -1;
    }
`;

const StyledItem = styled.button`
    width: 100%;
    padding: 20px 24px;

    text-align: left;
    font-size: 14px;
    line-height: 24px;

    ${({type}) => {
        switch (type) {
            case MenuItemType.ALERT:
                return css`
                    color: #d91626;
                `;
            default:
                return css`
                    color: rgba(0, 0, 0, 0.8);
                `;
        }
    }}
    &:not(:last-child) {
        border-bottom: 1px solid rgba(108, 112, 114, 0.1);
    }
`;

const StyledMenuButton = styled.button`
    width: 36px;
    height: 36px;
    border: 1px solid #808080;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.4;
    }
`;

const Menu = (props) => {
    const {items, disabled, onItemClick} = props;
    const [showItems, setShowItems] = useState(false);
    const itemsRef = useRef(null);

    useEffect(() => {
        const onOutsideClick = (event) => {
            const {target} = event;
            if (showItems && !itemsRef.current?.contains(target)) {
                setShowItems(false);
            }
        };

        document.addEventListener("click", onOutsideClick);
        return () => document.removeEventListener("click", onOutsideClick);
    }, [showItems]);

    const handleToggleButtonClick = () => setShowItems(!showItems);

    return (
        <StyledMenu>
            <StyledMenuButton
                type="button"
                aria-label="Subscription quick action menu"
                disabled={disabled}
                onClick={handleToggleButtonClick}
            >
                <Icon name="ellipsis" width={14} height={14}/>
            </StyledMenuButton>

            {showItems && (
                <StyledItems ref={itemsRef}>
                    {items.map((item, index) => {
                        const {type = MenuItemType.DEFAULT, name} = item;

                        const handleClick = () => {
                            setShowItems(false);
                            if (onItemClick) {
                                onItemClick(item);
                            }
                        };

                        return (
                            <StyledItem
                                key={index}
                                type={type}
                                onClick={handleClick}
                            >
                                {name}
                            </StyledItem>
                        );
                    })}
                </StyledItems>
            )}
        </StyledMenu>
    );
};

Menu.propTypes = MenuPropTypes;
Menu.defaultProps = MenuDefaultProps;

export default Menu;
