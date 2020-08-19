import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styled';
import Routes from './routes/routes';


function App() {
  return (
    <div className="App"> 
      <CssBaseline />
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
