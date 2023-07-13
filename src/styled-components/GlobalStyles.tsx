import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Rubik', sans-serif;
    }
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: hidden;
    }
    #root{
        width: 100%;
    }
`;

export default GlobalStyles;
