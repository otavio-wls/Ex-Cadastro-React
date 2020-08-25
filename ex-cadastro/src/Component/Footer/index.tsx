import React from 'react';
import { Link } from 'react-router-dom';
import { CssBaseline, Container, Typography, makeStyles } from '@material-ui/core';
// import { Facebook, Instagram, Twitter } from '@material-ui/icons';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{textAlign: 'center', color:'#ffffff'}}>
      {'Copyright © '}
      <Link style={{textDecoration: 'none'}} color="inherit" to="/">
        Photografy Premium
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
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
    backgroundColor: '#1E90FF',     
  },    
}));

export default function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
    <CssBaseline />
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="body1" style={{textAlign: 'center', color:'#ffffff'}}>Photografy Premium</Typography>
        <Copyright />
        {/* <div className={classes.redesSociais}>
          <a href='https://pt-br.facebook.com/'><p><Facebook/></p></a>
          <a href='http://instagram.com/'><p><Instagram/></p></a>
          <a href='https://twitter.com/login?lang=pt'><p><Twitter/></p></a>
        </div> */}
      </Container>
    </footer>    
  </div>
  );
}