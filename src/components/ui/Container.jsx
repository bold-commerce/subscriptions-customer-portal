import React from "react";
import styled from "styled-components";
import { ChildrenType } from "../../customPropTypes";

const ContainerPropTypes = {
    children: ChildrenType.isRequired
};

const StyledContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    min-width: 320px;
    max-width: 1028px;
    padding-right: 8px;
    padding-left: 8px;

    @media (min-width: 576px) {
        padding-right: 16px;
        padding-left: 16px;
    }
`;

const Container = (props) => {
    const { children } = props;

    return (
        <StyledContainer className="customer-portal-container">
            { children }
        </StyledContainer>
    );
};

Container.propTypes = ContainerPropTypes;

export default Container;
