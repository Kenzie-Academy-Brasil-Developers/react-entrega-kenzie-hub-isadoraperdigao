import styled from "styled-components";

export const StyledAddTechModal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0; 
    width: 100%;
    height: 100vh;
    z-index: 2;
    background-color: rgba(18, 18, 20, 0.5);
`

export const StyledModalBox = styled.div`
    width: 90%;
    max-width: 369px;
    background-color: var(--color-gray-3);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    gap: 1em;

    header {
        background-color: var(--color-gray-2);
        padding: 0.625em 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header > button {
        border: none;
        background-color: var(--color-gray-2);
        text-align: center;
        color: var(--color-gray-1);
    }

    form {
        padding: 0.625em 1em;
    }

    form > select {
        width: 100%;
        padding: 0.563rem 0.813rem;
        color: var(--color-gray-0);
        font-size: 0.813rem;
        font-weight: 400;
        background-color: var(--color-gray-2);
        border: 0.97px solid var(--color-gray-2);
        border-radius: 3px;

        @media (min-width: 960px) {
            font-size: 1rem;
        }
    }
`