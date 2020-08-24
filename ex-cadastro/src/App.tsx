import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Routes from './routes/routes';


function App() {
  const theme = createMuiTheme({
    palette:{
      success:{
        main: '#00008B',
      }
    }
  });

  return (
    <div className="App">       
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>

    </div>
  );
}

export default App;
