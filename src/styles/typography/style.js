import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
    font-weight: 700;
    color: var(--color-gray-0);
   
    ${({ fontSize }) => {
        switch(fontSize) {
            case "one":
                return css`
                  font-size: 0.875rem;

                  @media (min-width: 960px) {
                    font-size: 1.125rem;
                  }
                `;
            case "two":
                return css`
                    font-size: 1.125rem;
                `;
            // no default 
        }
    }}
`

