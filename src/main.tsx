/* eslint-disable @typescript-eslint/comma-dangle */
import { ThemeProvider } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import './index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import theme from './components/style/Theme';
import { HashRouter } from 'react-router-dom';
import ScrollTop from './ScrollTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollTop />
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
