import React, { Fragment, useState } from 'react';
import api from '../../api/api';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ToastAnimated, { showToast } from '../../Toastify/index';
import { Link } from 'react-router-dom';
import {withRouter,useHistory} from 'react-router-dom';
import { CssBaseline, Typography, makeStyles, TextField, Button, Grid, Box, Paper } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link style={{textDecoration: 'none', color: '#00008B'}} to="#">
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
    maxWidth: '100%'
  },  
  avatar : {
    margem : theme.spacing(1),
    backgroundColor: '#1E90FF',
  } ,
  title:{
    color: '#1E90FF',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  gridItem:{
    maxWidth: '100%'
  },
  paper: {   
    margin : theme.spacing(9.5, 15),
    paddingTop: '10%',
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
    // '&:hover': {
    //   background: '#87CEFA',      
    // }
  },
  submit:{
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1E90FF',
    color: '#fff',
  },
  optionsLogin: {
    display: 'flex',
    marginTop: '15px',    
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  }, 
}))

const  Login = () => {  
  const history = useHistory();
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
      showToast({type: 'success', message: `Seja bem vindo, ${response.data.user.name}`})
      localStorage.setItem('token', response.data.token);   
      history.push('/clients');              
      } catch(error) {
        showToast({type: 'error', message: 'Houve algum erro, tente novamente'});      
        console.log(error);
      };         
      setEmail('');
      setPassword('');      
  }

  return(
    <Fragment>   
      <ToastAnimated />
        <CssBaseline />             
          <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={false} md={6} className={classes.image} />                            
            < Grid  item xs ={12}  sm={12}  md={6}  component={Paper}  elevation={6} square className={classes.gridItem} >
              <div className={classes.paper}>
              < Avatar  className = {classes.avatar}>
                <LockOutlinedIcon />
              </Avatar >                
              <Typography component='h2' className={classes.title}>Olá, seja bem vindo</Typography>
                <form className={classes.form} noValidate>                  
                  <TextField variant='outlined' margin='normal'  required fullWidth id="email" label="Email"
                    name="email"                    
                    value={email}                   
                    color='primary'
                    className={classes.textField}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus/>                    
                  <TextField variant='outlined' type='password' margin='normal' required fullWidth id="senha" label="Senha"
                    name="senha"
                    value={password}                 
                    color='primary'
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
                    <Link to='/cadastro' style={{textDecoration: 'none'}}><Button color="primary">Cadastro</Button></Link>
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
export default withRouter(Login);