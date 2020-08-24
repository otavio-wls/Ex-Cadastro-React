import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  '@global' : {
    margin: 0,
    padding: 0,
  },
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  appBar: {
    display: 'flex',
    position: 'fixed',
    overflow: 'auto',
    backgroundColor: '#00008B',
  },
  title:{
    flexGrow: 1,
    fontSize: '25px'
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
          <Typography className={classes.title}>Photografy Premium</Typography>          
          <Link to='/'><Button className={classes.button} color="inherit">Login</Button></Link>
        </Toolbar>
      </AppBar>  
    </div>    
  );
}