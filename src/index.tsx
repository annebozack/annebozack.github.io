import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import { MantineProvider } from '@mantine/core';
import GlobalStyle from './global.css';

ReactDOM.render(
  <BrowserRouter>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: () => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
        }),
      }}
    >
      <GlobalStyle />
      <App />
    </MantineProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
