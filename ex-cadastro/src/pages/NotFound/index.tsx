import './style.css';
import React from 'react';
import { Container, makeStyles, Button, Box } from '@material-ui/core';
import lupa from '../../assets/lupa.png';

const useStyles = makeStyles((theme) => ({
  button:{
    marginLeft: '25%',
    marginRight: '25%',
    textAlign: 'center',
  }
}));

export default function NotFound(){
  const classes = useStyles();
  return(
    <div style={{background: '#191970', width: '100%', height: '100vh'}}>    
    <Container maxWidth='md' style={{background: '#191970', width: '100%', height: '100%'}}>     
      <Box>
        <h2 style={{fontSize: '150px', textAlign: 'center', color: '#FF8C00'}}>4 0 4</h2>
        <h1 style={{textAlign: 'center', color: '#ffffff', marginBottom: '2%'}}>Página não encontrada</h1>
      </Box>      
      <Box className={classes.button}>
        <Button style={{color: 'white'}}>Voltar ao login</Button>
      </Box>      
      <img src={lupa} alt='lupa' style={{width: '280px', height: '300px'}} />
    </Container>
    </div>
  );
}