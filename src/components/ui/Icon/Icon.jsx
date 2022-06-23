import React from "react";
import styled, { css } from "styled-components";
import PT from "prop-types";
import EllipsisIcon from "./icons/EllipsisIcon";
import MastercardIcon from "./icons/MastercardIcon";
import VisaIcon from "./icons/VisaIcon";
import EditIcon from "./icons/EditIcon";

const StyledIcon = styled.svg`
    ${({width, height}) => css`
        height: ${height}px;
        width: ${width}px;
    `}
`;

const IconPropTypes = {
    name: PT.string.isRequired,
    height: PT.number,
    width: PT.number,
    className: PT.string
};

const IconDefaultProps = {
    height: 24,
    width: 24
};

const IconNameComponentMap = {
    "edit": EditIcon,
    "ellipsis": EllipsisIcon,
    "mastercard": MastercardIcon,
    "visa": VisaIcon
};

const Icon = ({name, height, width, className}) => {
    return <StyledIcon as={IconNameComponentMap[name]} width={width} height={height} className={className}/>;
};

Icon.propTypes = IconPropTypes;
Icon.defaultProps = IconDefaultProps;

export default Icon;
