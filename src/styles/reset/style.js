import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        color: unset;
        text-decoration: none;
    }

    ul, ol, li {
        list-style: none;
    }
`