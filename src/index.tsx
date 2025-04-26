import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';

import './index.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import './i18n/i18n';
import {MenuProvider} from "./providers/MenuProvider.tsx";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <MenuProvider>
            <CssBaseline />
            <App />
          </MenuProvider>
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>,
  );
}
