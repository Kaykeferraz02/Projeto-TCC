import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-family: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background: ${props => props.theme.homeBackground};
    }
`

