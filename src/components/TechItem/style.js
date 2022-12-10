import styled from "styled-components";

export const StyledTechItem = styled.li`
    width: 100%;
    padding: 0.75em;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    background-color: var(--color-gray-4);
    border-radius: 4px;

    p {
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--color-gray-0);
    }

    span {
       font-size: 0.75rem;
       font-weight: 400;
       color: var(--color-gray-1);
    }

    img {
        display: none;
    }

    @media (min-width: 960px) {
        img {
            display: block;
        }
    }
`