import React from "react";
import PT from "prop-types";
import styled from "styled-components";
import { ChildrenType } from "../../customPropTypes";
import TitleWithEditButton from "./TitleWithEditButton";

const SectionPropTypes = {
    title: PT.string,
    children: ChildrenType.isRequired
};

const StyledSection = styled.div`
    position: relative;

    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 24px;

    @media (min-width: 576px) {
        padding-top: 32px;
    }
`;

const StyledTitle = styled.div`
    margin-bottom: 32px;

    @media (min-width: 576px) {
        margin-bottom: 26px;
    }
`;

const Section = (props) => {
    const { title, children } = props;

    return (
        <StyledSection>
            {title && (
                <StyledTitle>
                    <TitleWithEditButton title={title} />
                </StyledTitle>
            )}

            { children }
        </StyledSection>
    );
};

Section.propTypes = SectionPropTypes;

export default Section;
