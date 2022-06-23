import React from "react";
import styled from "styled-components";
import { ChildrenType } from "../../customPropTypes";

export const FormLayoutPropTypes = {
    children: ChildrenType.isRequired
};

const StyledFormLayout = styled.div`
  display: grid;
  row-gap: 18px;

  @media (min-width: 768px) {
    row-gap: 32px;
  }
`;

const FormLayout = (props) => {
    const { children } = props;

    return (
        <StyledFormLayout>
            { children }
        </StyledFormLayout>
    );
};

FormLayout.propTypes = FormLayoutPropTypes;

export default FormLayout;
