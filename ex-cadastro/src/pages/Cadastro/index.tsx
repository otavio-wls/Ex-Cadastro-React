import React, { useState, Fragment } from 'react';
import api from '../../api/api';
import { toast } from 'react-toastify';
import Header from '../../Component/Header/index';
import Footer from '../../Component/Footer/index';
import { TextField, makeStyles, Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '85%',
    },
  },
  paper:{
    width: '85%',
    marginTop: '5px',    
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '65px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  containerForm: {    
    minWidth: '100vh',
    flex: 1,
    marginTop: 80,    
    marginLeft: 5,
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
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [contact2, setContact2] = useState('');

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
    setEmail('');
    setPassWord('');
    setName('');
    setAddress('');
    setContact('');
    setContact2('');
  }

  return (
    <Fragment>
    <Header />    
    <Grid container component='main' className={classes.containerForm}>     
    <Grid item xs={10}  sm={ 'auto' }  md={ 'auto' }>
      <div className={classes.paper}>
        <Typography component='h1' variant='h4' style={{color: '#00008B'}}>Cadastro</Typography>
        <form>
          <TextField variant='outlined' margin='normal' required fullWidth id="nome" label="Nome"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
            autoFocus/>
          <TextField variant='outlined' margin='normal' required fullWidth id="email" label="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus/>
          <TextField variant='outlined' margin='normal' type='password' required fullWidth id="senha" label="Senha"
            name="senha"
            value={password}
            onChange={e => setPassWord(e.target.value)}
            autoComplete="senha"
            autoFocus/>
          <TextField variant='outlined' margin='normal' required fullWidth id="endereco" label="Endereço"
            name="endereco"
            value={address}
            onChange={e => setAddress(e.target.value)}
            autoComplete="endereco"
            autoFocus/>                
          <TextField variant='outlined' margin='normal'  type='number' required  id="telefone" label="Telefone"
            name="telefone"
            value={contact}
            onChange={e => setContact(e.target.value)}
            autoComplete="telefone"
            style={{marginRight: '5px'}}
            autoFocus/>                
          <TextField variant='outlined' margin='normal'  type='number' required   id="celular" label="Celular"
            name="celular"
            value={contact2}
            onChange={e => setContact2(e.target.value)}
            style={{marginRight: '5px'}}          
            autoComplete= "celular"
            autoFocus/>                
        </form>      
        <div className={classes.buttons}>
          <Button onClick={cadastrar} type='submit' fullWidth variant='contained'  className={classes.submit}>Cadastrar</Button>         
        </div>        
      </div>       
      </Grid>
    </Grid>
    <Footer />
  </Fragment>
  );
}
