import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import theme from '@reflexjs/preset-base';

import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
