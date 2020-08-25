import './style.css';
import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import vidro from '../../assets/vidro.png';
import error from '../../assets/error.png';
import robo from '../../assets/robo.png';

const useStyles = makeStyles((theme) => ({
  title:{
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '2%',
    paddingTop: '2%',
    paddingRight: '2%',
    justifyContent: 'space-between'
  },
  button:{
    marginLeft: '25%',
    marginRight: '25%',
    textAlign: 'center',
  }
}));

export default function NotFound(){
  const classes = useStyles();
  return(
    <div style={{background: '#191970', width: '100%', minHeight: '100vh'}}>            
    <div style={{background: '#191970', width: '100%', height: '100%'}}>     
      <div className={classes.title}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <h1 style={{fontSize: '50px', color: '#B22222	'}}>ERROR</h1>
          <img src={error} alt='error' style={{width: '85px', height: '85px'}}/>        
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src={error} alt='error' style={{width: '85px', height: '85px'}}/>
          <h1 style={{fontSize: '50px', color: '#B22222	'}}>ERROR</h1>      
        </div>        
      </div>     
        <h2 style={{fontSize: '150px', textAlign: 'center', color: '#FF8C00'}}>4 0 4</h2>
        <h1 style={{textAlign: 'center', color: '#ffffff', marginBottom: '2%'}}>Página não encontrada</h1>       
      <div className={classes.button}>
        <Button style={{color: 'white'}}>Voltar ao login</Button>
      </div>      
    </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <img src={vidro} alt='vidro' style={{width: '430px', height: '450px'}} />
        <img src={robo} alt='robo' style={{width: '430px', height: '450px'}} />
        <img src={vidro} alt='vidro' style={{width: '430px', height: '450px'}} />
      </div>    
    </div>    
  );
}