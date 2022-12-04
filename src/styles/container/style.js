import styled from "styled-components";

export const StyledContainer= styled.div`
    width: 100%;
    height: 100%;
    max-height: 502px;
    padding: 2.063rem 0.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.375rem;
    background-color: var(--color-gray-3);
    border-radius: 3px;

    @media (min-width: 960px) {
        padding: 2.625rem 1.125rem;
        gap: 1.75rem;
    }
`