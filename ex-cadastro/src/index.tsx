import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styled';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(  
  <React.StrictMode>
    <CssBaseline />
    <GlobalStyle />
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
