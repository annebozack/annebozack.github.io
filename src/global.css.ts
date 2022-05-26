import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100%;
    height: 100vh;
  }

  #root {
    display: flex;
    height:100vh;  
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
