import React, { Component } from 'react';
import { isLogin } from '../Component/Auth/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Clients from '../pages/Client';
import Cadastro from '../pages/Cadastro';

 const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLogin()? (
      <Component {...props} />
    ) : <Redirect to='/clients'/>    
    )} />
  );

export default function Routes() {

    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
           <PrivateRoute path='/clients' component={Clients} /> 
          <Route exact path='/cadastro' component={Cadastro} />
        </Switch>
      </BrowserRouter>
  
    );

  
}