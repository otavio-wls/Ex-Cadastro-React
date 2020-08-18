import React, { Fragment, useState } from 'react';
import api from '../../api/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { CssBaseline , Container, Typography, makeStyles, TextField, Button, Grid, Box } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
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
    width: '100%',        
    display: 'flex',    
    flexDirection: 'column',
    alignItems: 'center',
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
      toast.error('Os campos não podem ficar em branco');      
      return;
    }
    try{
      const resposta = await api.post('users/login', {name: 'admin@', email: email , password: password})
        toast.success(`Seja Bem Vindo ${resposta.data.user.name}`);    
        console.log(resposta.data);
        localStorage.setItem('token', resposta.data.token);                
      } catch(error) {
        toast.error('Houve algum erro, tente novamente');      
        console.log(error);
      };            
    }

  return(
      <Fragment>   
        <CssBaseline />
          <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />                            
            <Grid item xs={false} sm={4} md={5} justify='center' alignContent='center' className={classes.formLogin} >          
            <div className={classes.root}>          
            <Container component='main' maxWidth='xs' className={classes.main}>
              <div className={classes.paper}>
                <Typography component='h1' variant='h4' className={classes.title}>Seja bem vindo</Typography>
                <form className={classes.form} noValidate>
                  <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Email"
                    name="email"                                    
                    className={classes.textField}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus/>
                  <TextField variant='outlined' type='password' margin='normal' required fullWidth id="senha" label="Senha"
                    name="senha"
                    className={classes.textField}
                    onChange={e => setPassword(e.target.value)}
                    autoComplete="senha"
                    autoFocus/>
                </form>
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
            </Container>
          </div>     
         </Grid>            
        </Grid>
      </Fragment>
  );
}