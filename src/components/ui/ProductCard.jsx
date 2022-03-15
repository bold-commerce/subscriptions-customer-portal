import React from "react";
import PT from "prop-types";
import styled from "styled-components";
import { Price } from "@boldcommerce/stacks-ui";

export const ProductCardPropTypes = {
    image: PT.string.isRequired,
    name: PT.string.isRequired,
    variant: PT.string.isRequired,
    price: PT.number.isRequired,
    quantity: PT.number.isRequired
};

const StyledProductCard = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    column-gap: 34px;
`;

const StyledImage = styled.img`
    max-width: 80px !important;
    max-height: 80px;

    object-fit: cover;
`;

const StyledTextWrapper = styled.div`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: var(--color-text-default);
`;

const StyledLink = styled.a`
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: underline;
    color: var(--color-text-link);
`;

const ProductCard = (props) => {
    const { image, name, variant, price, quantity } = props;

    return (
        <StyledProductCard>
            <StyledImage src={image} />
            <StyledTextWrapper>
                <StyledLink>
                    { name } - { variant }
                </StyledLink>
                <Price amount={price} />
                Quantity: { quantity }
            </StyledTextWrapper>
        </StyledProductCard>
    );
};

ProductCard.propTypes = ProductCardPropTypes;

export default ProductCard;
