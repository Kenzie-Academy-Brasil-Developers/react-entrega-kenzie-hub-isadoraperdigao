import styled from "styled-components";

export const StyledGrayButton = styled.button`
    width: 100%;
    padding: 0.563rem;
    background-color: var(--color-gray-1);
    border: 1.22px solid var(--color-gray-1);
    border-radius: 4px;

    color: var(--color-white);
    font-size: 0.75rem;
    font-weight: 500;
    text-align: center;

    & :hover {
        background-color: var(--color-gray-2);
        border: 1.22px solid var(--color-gray-2);
    }

    @media (min-width: 960px) {
        font-size: 1rem;
    }
`