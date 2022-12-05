import styled, { css } from "styled-components";

export const StyledDarkGrayButton = styled.button`
    background-color: var(--color-gray-3);
    border: 1px solid var(--color-gray-3);
    border-radius: 4px;

    padding: 0.375rem;

    color: var(--color-gray-0);
    font-size: 0.625rem;
    font-weight: 600;

    :hover {
        background-color: var(--color-gray-2);
    }

    @media (min-width: 960px) {
        font-size: 0.75rem;
    }

    ${
        ({width}) => {
            switch(width) {
                case "one":
                    return css`
                    width: 79.54px;

                    @media (min-width: 960px) {
                        width: 67.49px;
                    }
                    `;
                case "two":
                    return css`
                    width: 55.49px;
                    `;
                //no default
            }
        }
    }
`