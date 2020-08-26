import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Facebook, Instagram, Twitter, LocationOn,Phone, Email } from '@material-ui/icons';
import './style.css';

const useStyles = makeStyles((theme) =>({
  root:{
    maxWidth: '100%',
    flexGrow: 1,
  },
  divFooter:{
    display: 'flex',
    backgroundColor: '#1E90FF',
    textAlign: 'center',
    height: 'auto',
    color: '#fff',
  },
  location:{
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20%',
    marginTop: '10%',
    justifyContent: 'space-evenly'
  },
  redesSociais:{
    display: 'flex',
    marginTop: '25px',
    width: '50%',
    justifyContent: 'space-evenly'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <div className={classes.divFooter}>
        <div style={{width: '40%'}}>
          <div className={classes.location}>
            <div style={{display: 'flex', alignItems: 'flexStart'}}>
              <LocationOn style={{fontSize: 35, marginBottom: '12px'}}/> 
                <p style={{textAlign: 'left', marginLeft: '5px'}}>Rua São Sebastião, 654 - Centro - Sorocaba,<br></br> São Paulo - Brasil</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Phone style={{fontSize: 35, marginBottom: '12px'}}/>
              <p style={{textAlign: 'left', fontSize: '18px', marginLeft: '5px'}}>+55 15 95148-5252 </p>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-start'}}>
              <Email style={{fontSize: 35, marginBottom: '12px'}}/>
              <p style={{textAlign: 'left', fontSize: '15px', marginTop: '6px', marginLeft: '5px'}}>photografypremium@oficial.com</p>
            </div>
          </div>              
        </div>
      </div>    
      <div style={{width: '40%', textAlign: 'justify', marginLeft: 'auto'}}>
        <div style={{width: '100%'}}>
          <h2 style={{paddingTop: '7%', marginBottom: '10px'}}>Sobre nossa equipe</h2>
          <p style={{width: '50%'}}>Empresa de fotografias profissionais!<br></br>Desde ensaio até criações de artes para seu evento!</p>
        </div>
        <div className={classes.redesSociais}>
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div>
        <p style={{textAlign: 'center', color: '#1E90FF', fontWeight: 'bold'}}>&copy;Photografy Premium 2020</p>
      </div>        
    </div>    
  );
}