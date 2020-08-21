import './style.css';
import React from 'react';
import Header from '../../Component/Header/index';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import lupa from '../../assets/lupa.png';

const useStyles = makeStyles((theme) =>({
  '@body':{
    backgroundColor: '#B22222'
  },
  divContainer:{
    width: '95%',
    justifyContent: 'space-between',
    marginTop: '150px',    
    display: 'flex',    
  },
  text:{
    marginTop: '150px',
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
    <>
    <Header />
    <div style={{width: '100%', alignItems: 'center'}}>
      <div className={classes.divContainer}>
        <img src={lupa} alt='lupa' className={classes.img} />
        <div>
          <h1 className={classes.text}>Erro 404: Página não encontrada</h1>                
          <Link to='/'><Button
           style={{
            textAlign: 'center',
            marginTop: '15px',
            marginLeft: 'auto',
            marginRight: 'auto',
           }}>
             Voltar para o inicio
          </Button></Link>
        </div>        
      </div>      
    </div>
    </>
  );
}