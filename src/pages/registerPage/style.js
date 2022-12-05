import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    width: 90%;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    justify-content: center;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.938rem;
        margin-top: 3.094rem;
    }

    header > img {
        height: 14px;
    }

    p {
        color: var(--color-gray-1);
        font-size: 0.599rem;
        font-weight: 400;
    }

    @media (min-width: 960px) {
        img {
            height: 20px;
        }

        p {
            font-size: 0.75rem;
        }
    }
`