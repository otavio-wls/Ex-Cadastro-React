import React, { useState } from 'react';
import api from '../../api/api';
import Header from '../../Component/Header/index';
import { TextField, makeStyles, Container, Typography, Button  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  paper:{
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  containerForm: {
    marginTop: 150,
    marginLeft: 0
  },  
  buttons:{
    display: 'flex',        
  },
  submit:{
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#3fa7d6',
    color: '#fff',    
  },
  facebook:{
    margin: theme.spacing(3, 0, 2),
    color: '#fff',    
    backgroundColor: '#0d21a1'
  }, 
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [name, setName] = useState('');

  async function cadastrar() {
    if(email.length ===0 || password.length === 0 || name.length ===0 ){
      alert('Os campos não podem ficarm em branco');      
      return;
    }
    try{
      const resposta = await api.post('users', {name: name, email: email, password: password})
      console.log(resposta.data);
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <>
    <Header />
    
    <Container className={classes.containerForm} maxWidth='lg'>     
      <div className={classes.paper}>
        <Typography component='h1' variant='h4'>Tela de Cadastro</Typography>
        <form>
        <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Digite seu Email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          autoFocus/>
        <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Digite sua Senha"
          name="email"
          onChange={e => setPassWord(e.target.value)}
          autoComplete="email"
          autoFocus/>
        <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Digite seu Nome"
          name="email"
          onChange={e => setName(e.target.value)}
          autoComplete="email"
          autoFocus/>
        </form>      
        <div className={classes.buttons}>
          <Button onClick={cadastrar} type='submit' className={classes.submit}>
          Cadastrar</Button>
          
          <Button onClick={cadastrar} type='button' className={classes.facebook} >
          Entre com o Facebook</Button>
        </div>
        
      </div> 
      
    </Container>
    </>
  );
}
