import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Nova Round', cursive;
    
    }
    body{
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
       overflow-x: hidden;
    }
    #root{
        width: 100%;
        
    }
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
        ::-webkit-scrollbar-thumb {
        background-color: #b2c0b2;
        border-radius: 10px;
    }
`;

export default GlobalStyles;
