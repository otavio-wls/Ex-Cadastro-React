import './index.css';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styled';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(  
  <React.StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
