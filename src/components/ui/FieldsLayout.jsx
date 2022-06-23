import React from "react";
import styled from "styled-components";
import { ChildrenType } from "../../customPropTypes";

export const FieldsLayoutPropTypes = {
    children: ChildrenType.isRequired
};

const StyledFieldsLayout = styled.div`
    display: grid;
    gap: 16px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(${({ fieldsAmount }) => fieldsAmount}, 1fr);
    }
`;

const FieldsLayout = (props) => {
    const { children } = props;
    const fieldsAmount = Array.isArray(children) ? children.length : 1;

    return (
        <StyledFieldsLayout fieldsAmount={fieldsAmount}>
            { children }
        </StyledFieldsLayout>
    );
};

FieldsLayout.propTypes = FieldsLayoutPropTypes;

export default FieldsLayout;
