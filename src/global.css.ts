import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html { height:100%; }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100%;
    min-height: 100%;
  }

 

  #root {
    min-height: 100vh;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
