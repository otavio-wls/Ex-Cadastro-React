import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../../Component/Header/index';
import lupa from '../../assets/lupa.png';

const useStyles = makeStyles((theme) =>({
  divContainer:{
    width: '95%',
    justifyContent: 'space-between',
    marginTop: '75px',    
    display: 'flex',    
  },
  text:{
    marginTop: '200px',
    fontSize: '45px',
    color: '#ff0000',
  },
  img:{
    width: '450px',
    height: '450px',
    marginTop: '10px',
    marginLeft: '50px',
  }
}));


export default function NotFound(){
  const classes = useStyles();
  return(
    <div style={{width: '100%', alignItems: 'center'}}>
      <Header />
      <div className={classes.divContainer}>
        <img src={lupa} alt='lupa' className={classes.img} />
        <h1 className={classes.text}>Erro 404: Página não encontrada</h1>        
      </div>      
      
    </div>
  );
}