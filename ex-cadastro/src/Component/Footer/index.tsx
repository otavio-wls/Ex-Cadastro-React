import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, Container, Typography, makeStyles } from '@material-ui/core';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{textAlign: 'center'}}>
      {'Copyright © '}
      <Link  color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',    
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },  
  redesSociais:{
    display: 'flex',
    marginLeft: '50%',
    marginRight: '50%',
    alignItems: 'center',
  }
}));

export default function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
    <CssBaseline />    
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body1" style={{textAlign: 'center'}}>My sticky footer can be found here.</Typography>
        <Copyright />
        <div className={classes.redesSociais}>
          <a href='https://pt-br.facebook.com/'><p><Facebook/></p></a>
          <a href='http://instagram.com/'><p><Instagram/></p></a>
          <a href='https://twitter.com/login?lang=pt'><p><Twitter/></p></a>
        </div>
      </Container>
      
    </footer>
  </div>
  );
}

    // <div className='footer'>
    //   <CssBaseline />
    //   <h2>Clinica 10</h2>
    //   <p>Rua São José, 56, Centro - SP</p>
    //   
    // </div>
  // );
