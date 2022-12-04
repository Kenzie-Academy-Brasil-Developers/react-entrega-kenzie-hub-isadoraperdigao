import styled from "styled-components";

export const StyledLabel = styled.label`
    color: var(--color-gray-0);
    font-size: 0.625rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;

    @media (min-width: 960px) {
        font-size: 0.75rem;
        gap: 1.375rem;
    }
`

export const StyledFormInput = styled.input`
    width: 100%;
    padding: 0.563rem 0.813rem;
    color: var(--color-gray-0);
    font-size: 0.813rem;
    font-weight: 400;
    background-color: var(--color-gray-2);
    border: 0.97px solid var(--color-gray-2);
    border-radius: 3px;

    & :placeholder {
        color: var(--color-gray-1);
    }

    @media (min-width: 960px) {
        font-size: 1rem;
    }
`