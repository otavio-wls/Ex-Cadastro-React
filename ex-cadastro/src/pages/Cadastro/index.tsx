import './style.css';
import React, { useState } from 'react';
import api from '../../api/api';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import { toast } from 'react-toastify';
import { TextField, makeStyles, Grid, Typography, Button, Card, CardContent, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },   
    '& html': {
      background: '#000000'
    }
  },    
  cardPrincipal:{
    backgroundColor: '#1E90FF',    
  },
  paper:{
    width: '70%',        
    height: '100%',
    marginTop: '5px',    
    marginLeft: '10%',    
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  cardForm:{
    // backgroundColor: 'rgb(32,32,36)'
  },
  containerForm: {    
    display: 'flex',      
    paddingTop: '10%',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '100%',
  },    
  submit:{
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1E90FF',
    color: '#fff',
  },  
  description:{
    width: '30%',
    marginTop: '4.8%'
  }
}));

export default function ValidationTextFields() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [name, setName] = useState('');  
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
    setContact('');
    setContact2('');
  } 

  return (
    <div style={{width:'100%', height: '100vh', backgroundColor: '#fff'}}>
    <Header />
    <Container maxWidth='xl'>    
    <Grid container component='main' className={classes.containerForm}>     
    <Grid item xs={12}  sm={ 'auto' }  md={7} lg={7}>
      <div className={classes.paper}>            
        <Card className={classes.cardForm}>          
          <CardContent>
            <Typography component='h1' variant='h4' style={{color: '#1E90FF'}}>Cadastro</Typography>    
            <form>
              <TextField variant='outlined' margin='normal' required fullWidth id="nome" label="Nome"
                name="name"            
                color='primary'
                value={name}
                onChange={e => setName(e.target.value)}            
                autoFocus/>
              <TextField variant='outlined' margin='normal' required fullWidth id="email" label="Email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}            
                autoFocus/>
              <TextField variant='outlined' margin='normal' type='password' required fullWidth id="senha" label="Senha"
                name="senha"
                value={password}
                onChange={e => setPassWord(e.target.value)}            
                autoFocus/>                        
              <TextField variant='outlined' margin='normal'  type='number' required fullWidth  id="celular" label="Celular"
                name="celular"
                value={contact2}
                onChange={e => setContact2(e.target.value)}
                style={{marginRight: '5px'}}                      
                autoFocus/>                
            </form>
            <Button onClick={cadastrar} type='submit' fullWidth variant='contained'  className={classes.submit}>Cadastrar</Button>         
          </CardContent>
        </Card>        
      </div>             
      </Grid>        
      <Grid item xs={ false }  sm={ false }  md={4} lg={4} className={classes.description}>
        <Card className={classes.cardPrincipal}>
          <CardContent>        
            <h1 style={{marginBottom: '25px', color: '#ffffff', fontWeight: 'bold'}}>Photografy Premium</h1>
            <h3 style={{marginBottom: '15px', color: '#ffffff', fontWeight: 400}}>Cadastre-se já para poder aproveitar todos os benefícios da nossa plataforma</h3>
            <p style={{marginBottom: '15px', color: '#ffffff'}}>Com seu cadastro você pode:</p>

            <ul style={{marginBottom: '15px', marginLeft: '30px'}}>
              <li style={{listStyleType: 'circle', color: '#ffffff'}}>Acesso a fotografias de diversas pessoas ao redor do mundo</li>
              <li style={{listStyleType: 'circle', color: '#ffffff'}}>Encontrar amigos e conhecer novas pessoas no nosso chat</li>
              <li style={{listStyleType: 'circle', color: '#ffffff'}}>Compartilhar suas fotos quantas vezes quiser </li>
            </ul>
          </CardContent>
          <Link style={{textDecoration: 'none'}} to={'/'}><Button style={{marginLeft: '20px', color: '#fff'}}>Voltar para o login</Button></Link>
        </Card>
      </Grid>
    </Grid>
  </Container>    
  </div>
  );
}
