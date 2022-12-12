import styled from "styled-components";

export const StyledAddModalBox = styled.div`
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
        border-radius: 3px 3px 0 0;
    }

    header > button {
        border: none;
        background-color: var(--color-gray-2);
        text-align: center;
        color: var(--color-gray-1);
    }

    form {
        width: 100%;
        padding: 0.625em 1em;
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
`