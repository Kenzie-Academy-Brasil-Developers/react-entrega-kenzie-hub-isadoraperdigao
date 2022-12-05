import styled from "styled-components";

export const StyledBrandButton = styled.button`
    width: 100%;
    padding: 0.563rem;
    background-color: var(--color-brand);
    border: 1.22px solid var(--color-brand);
    border-radius: 4px;

    color: var(--color-white);
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;

    & :hover {
        background-color: var(--color-brand-hover);
        border: 1.22px solid var(--color-brand-hover);
    }

    @media (min-width: 960px) {
        font-size: 1rem;
    }
`