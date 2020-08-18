import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styled';
import './index.css';
import Routes from './routes/routes';

function App() {
  return (
    <div className="App"> 
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
