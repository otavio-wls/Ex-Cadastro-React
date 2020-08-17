import React, { useState, Fragment } from 'react';
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
    marginLeft: 0,
  },  
  buttons:{
    display: 'flex',        
  },
  submit:{
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#00008B',
    color: '#fff',
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
      alert('Usuario cadastrado com sucesso');
    } catch(error) {
      alert(error);
    }
    
  }

  return (
    <Fragment>
    <Header />    
    <Container className={classes.containerForm} maxWidth='lg'>     
      <div className={classes.paper}>
        <Typography component='h1' variant='h4' style={{color: '#00008B'}}>Tela de Cadastro</Typography>
        <form>
        <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Digite seu nome"
          name="name"
          onChange={e => setName(e.target.value)}
          autoComplete="name"
          autoFocus/>
        <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Digite seu email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          autoComplete="email"
          autoFocus/>
        <TextField variant='outlined' margin='normal'  type='password' required fullWidth id="email" label="Digite sua senha"
          name="email"
          onChange={e => setPassWord(e.target.value)}
          autoComplete="email"
          autoFocus/>        
        </form>      
        <div className={classes.buttons}>
          <Button onClick={cadastrar} type='submit' fullWidth variant='contained'  className={classes.submit}>Cadastrar</Button>         
        </div>        
      </div>       
    </Container>
    </Fragment>
  );
}
