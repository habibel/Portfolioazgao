

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  :root{
     --darkcolor : #31515e;
     --lightcolor : #a5d0df;
     --darkwhite: #efefef;
     --photocolors: #00B0FF;
  }

`;
 
export default GlobalStyle;