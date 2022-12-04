import styled from "styled-components";

export const StyledLoginPage = styled.div`
    width: 90%;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    justify-content: center;

    img {
        height: 14px;
    }

    div {
        width: 100%;
        text-align: center;
    }

    div > p {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-gray-1);
        line-height: 18px;
        margin-bottom: 1.375rem;
    }

    @media (min-width: 960px) {
        img {
            height: 20px;
        }
    }
`