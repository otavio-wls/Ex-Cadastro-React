import React, { useState, Fragment } from 'react';
import api from '../../api/api';
import { toast } from 'react-toastify';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import { TextField, makeStyles, Container, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '85%',
    },
  },
  paper:{
    minWidth: '100vh',
    marginTop: '80px',    
    marginBottom: '65px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  containerForm: {    
    minWidth: '100vh',
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
    if(email.length === 0 || password.length === 0 || name.length === 0 ){
      toast.error('Os campos não podem ficar em branco');      
      return;
    }
    try{
      const resposta = await api.post('users', {name: name, email: email, password: password})
      console.log(resposta.data);
      toast.success('Cadastro feito com sucesso');
    } catch(error) {
      toast.error('Houve algum erro, tente novamente');      
    }    
  }

  return (
    <Fragment>
    <Header />    
    <Container className={classes.containerForm} maxWidth='xl'>     
          <div className={classes.paper}>
            <Typography component='h1' variant='h4' style={{color: '#00008B'}}>Cadastro</Typography>
            <form>
            <TextField variant='outlined' margin='normal' required fullWidth id="nome" label="Nome"
              name="name"
              onChange={e => setName(e.target.value)}
              autoComplete="name"
              autoFocus/>
            <TextField variant='outlined' margin='normal' required fullWidth id="email" label="Email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus/>
            <TextField variant='outlined' margin='normal' type='password' required fullWidth id="senha" label="Senha"
              name="senha"
              onChange={e => setPassWord(e.target.value)}
              autoComplete="senha"
              autoFocus/>                
            <TextField variant='outlined' margin='normal' required fullWidth id="endereco" label="Endereço"
              name="endereco"          
              autoComplete="endereco"
              autoFocus/>                
            <TextField variant='outlined' margin='normal'  type='number' required  id="telefone" label="Telefone"
              name="telefone"          
              autoComplete="telefone"
              style={{marginRight: '5px'}}
              autoFocus/>                
              <TextField variant='outlined' margin='normal'  type='number' required   id="celular" label="Celular"
              name="celular"
              style={{marginRight: '5px'}}          
              autoComplete= "celular"
              autoFocus/>                
            </form>      
            <div className={classes.buttons}>
              <Button onClick={cadastrar} type='submit' fullWidth variant='contained'  className={classes.submit}>Cadastrar</Button>         
            </div>        
          </div>       
        </Container>
      <Footer />
    </Fragment>
  );
}
