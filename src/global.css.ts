import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100%;
  }

  #root {
    // display: flex;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export default GlobalStyle;
