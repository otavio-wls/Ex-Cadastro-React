import React, { Fragment, useState } from 'react';
import api from '../../api/api';
import { toast } from 'react-toastify';
import ToastAnimated, { showToast } from '../../Toastify/index';
import { Link } from 'react-router-dom';
import { CssBaseline, Typography, makeStyles, TextField, Button, Grid, Box, Paper } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="#">
        Photografy Premium
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) =>({
  root: {
    height: '100vh',    
  },  
  title:{
    color: '#000080',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {   
    margin : theme.spacing(9.5, 15),
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
  },
  main: {
    marginTop: '40%',  
    marginRight: '31%',
    marginLeft: '17%',
  },  
  formLogin:{
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  textField:{
    color: '#3fa7d6',
  },
  submit:{
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#00008B',
    color: '#fff',
  },
  optionsLogin: {
    display: 'flex',
    marginTop: '15px',    
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  }, 
}))

export default function Login() {
  const classes = useStyles();     
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function logar(){    
    if(email.length ===0 || password.length === 0 ){      
      showToast({type: "error", message:'Os campos não podem ficar em branco'});      
      return;
    }
    try{
      const response = await api.post('users/login', {name: 'admin@', email: email , password: password})
      toast.success(`Seja bem vindo, ${response.data.user.name}`, {hideProgressBar: true, closeOnClick: true, autoClose: 5000});    
        console.log(response.data);
        localStorage.setItem('token', response.data.token);                
      } catch(error) {
        showToast({type: 'error', message: 'Houve algum erro, tente novamente'});      
        console.log(error);
      };         
      setEmail('');
      setPassword('');
    }

  return(
      <Fragment>   
        <CssBaseline />             
          <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />                            
            < Grid  item  xs = { 6 }  sm = { 8 }  md = { 5 }  component = { Paper }  elevation = { 6 }  square >
              <div className={classes.paper}>
                <Typography component='h1' variant='h4' className={classes.title}>Seja bem vindo</Typography>
                <form className={classes.form} noValidate>
                  <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Email"
                    name="email"   
                    value={email}    
                    error={email ===''}
                    helperText={email ===''? 'O email não pode ficar em branco': ''}
                    className={classes.textField}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus/>
                  <TextField variant='outlined' type='password' margin='normal' required fullWidth id="senha" label="Senha"
                    name="senha"
                    value={password}
                    error={password ===''}
                    helperText={password ===''? 'A senha não pode ficar em branco': ''}
                    className={classes.textField}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="senha"
                    autoFocus/>
                </form>
                <ToastAnimated />
                <Button onClick={logar} type='submit' fullWidth variant='contained' className={classes.submit}>
                  Entrar</Button>
                  <div className={classes.optionsLogin}>
                    <Button href="#text-buttons" color="primary">Esqueci minha senha</Button>
                    <Link to='/cadastro'><Button color="primary">Cadastro</Button></Link>
                  </div>       
              <Box mt={5}>
                <Copyright />
              </Box>         
            </div>                             
         </Grid>            
        </Grid>
      </Fragment>
  );
}