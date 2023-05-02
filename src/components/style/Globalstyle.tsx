import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing:border-box;
        background-color: #000;
        height: auto;
        
    }
    *{
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;
