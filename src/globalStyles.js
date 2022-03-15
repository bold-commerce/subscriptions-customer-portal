/* eslint-disable no-undef */
import { createGlobalStyle } from "styled-components";

export const Resets = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    .stx-select,
    .stx-button,
    .custom-button,
    .stx-field--with-select .stx-select,
    .stx-field--with-input .stx-input {
        margin: 0;

        text-transform: none;
    }

    button {
        border: none;
        border-radius: 0;
        padding: 0;

        background-color: transparent;
        cursor: pointer;

        &:disabled {
        cursor: not-allowed;
        }
    }

    .stx-field {
        margin-bottom: 0;
    }

    .stx-select__icon {
        pointer-events: none;
    }

    .stx-price__amount {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        text-align: left;
        color: inherit;
    }

    @media (min-width: 375px) {
        .button-ModalConfirm {
        width: max-content;

        &:not(:last-child) {
            margin-right: 8px;
        }
        }
    }

    @media (min-width: 576px) {
        .subscription-select-TopSection {
        max-width: 326px;
        }
    }

    // Override stacks-ui rems
    .stx-button {
        font-size: 1.4rem;
        line-height: 2rem;
        padding: 0.8rem 1.2rem;
    }

    .stx-field__label {
        font-size: 1.4rem;
        line-height: 3rem;
    }

    .stx-input {
        font-size: 1.4rem;
        line-height: 3rem;

        &__input-element {
        font-size: inherit;
        line-height: inherit;
        min-width: 2.4rem;
        }
    }

    .stx-select {
        font-size: 1.4rem;
        line-height: 3rem;

        &__select-element {
        font-size: inherit;
        line-height: inherit;
        min-width: 2.4rem;
        }
    }

    .stx-loading-spinner {
        width: 2rem;
        height: 2rem;
    }
`;

export const Vars = createGlobalStyle`
    :root {
        --color-text-default: rgba(0, 0, 0, 0.8);
        --color-text-link: #0a75c2;
    }
`;

const localRegularFont = `local("SFProDisplay-Regular");`;
const prodRegularFont = `
    url("./assets/fonts/SFProDisplay-Regular.woff2") format("woff2"),
    url("./assets/fonts/SFProDisplay-Regular.woff") format("woff");
`;

const localBoldFont =`local("SFProDisplay-Bold");`
const prodBoldFont = `
    url("./assets/fonts/SFProDisplay-Bold.woff2") format("woff2"),
    url("./assets/fonts/SFProDisplay-Bold.woff") format("woff");
`;

const regularFont = process.env.REACT_APP_ENV === "local" ? localRegularFont : prodRegularFont;
const boldFont = process.env.REACT_APP_ENV === "local" ? localBoldFont : prodBoldFont;

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: "SF Pro Display";
        font-weight: 400;
        font-style: normal;
        font-display: swap;

        src:
        ${regularFont}
    }

    @font-face {
        font-family: "SF Pro Display";
        font-weight: 700;
        font-style: normal;
        font-display: swap;

        src:
        ${boldFont}
    }

    body {
        font-family: "SF Pro Display", sans-serif;
    }
`;
