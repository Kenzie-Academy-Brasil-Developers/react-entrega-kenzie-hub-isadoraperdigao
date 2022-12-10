import styled from "styled-components";

export const StyledTechListHeader = styled.header`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1rem;

    h2 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--color-gray-0);
    }

    @media (min-width: 960px) {
        padding: 0;
    }
`