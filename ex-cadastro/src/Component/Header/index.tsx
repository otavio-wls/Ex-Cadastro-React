import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  '@global' : {
    margin: 0,
    padding: 0,
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    backgroundColor: '#3fa7d6',    
  },
  title:{
    flexGrow: 1,
  },
  button:{
    color: '#fff',
  }
 }));

export default function Header() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}>Clinica Saúde 10</Typography>
          <Button className={classes.button} color="inherit">Especialidades</Button>
          <Button className={classes.button} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>  
    </div>
    
  );
}