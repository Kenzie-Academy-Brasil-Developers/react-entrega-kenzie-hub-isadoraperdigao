import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    width: 100%;
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
        padding: 0 1.25rem;
        margin-bottom: 1.938rem;
    }

    header > img {
        height: 14px;
    }

    @media (min-width: 960px) {
        img {
            height: 20px;
        }
    }
`