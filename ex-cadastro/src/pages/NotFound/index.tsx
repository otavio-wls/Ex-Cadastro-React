import './style.css';
import React from 'react';
import Header from '../../Component/Header/index';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import lupa from '../../assets/lupa.png';
import wifi from '../../assets/wifi.png';

const useStyles = makeStyles((theme) =>({
  '@body':{
    backgroundColor: '#8B0000'
  },
  divContainer:{
    width: '95%',
    fontFamily: 'ultra, serif',
    justifyContent: 'space-between',
    marginTop: '85px',   
    marginLeft: '150px',   
    display: 'flex',    
  },
  text:{
    marginTop: '75px',
    textAlign: 'center',
    fontSize: '45px',
    color: '#ff0000',
  },
  link:{
    width: '100%',    
    marginRight: '50%'
  },
  lupa:{
    width: '350px',
    height: '350px',
    marginTop: '10px',
    marginLeft: '50px',
  },
  wifi:{
    width: '175px',
    height: "156px",
    marginTop: '139px',
    marginRight: '500px',  
  }
}));

export default function NotFound(){
  const classes = useStyles();
  return(
    <>
    <Header />    
    <div style={{width: '100%', alignItems: 'center'}}>
      <div>
        <h1 className={classes.text}>Erro 404: Página não encontrada</h1>                
        <Link to='/'><Button className={classes.link} >
          Voltar para o inicio
        </Button></Link>
      </div>        
      <div className={classes.divContainer}>     
        <img src={lupa} alt='lupa' className={classes.lupa} />
        <img src={wifi} alt='wifi' className={classes.wifi} />
      </div>      
    </div>
    </>
  );
}