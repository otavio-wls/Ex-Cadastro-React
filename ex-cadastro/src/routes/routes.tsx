import React, { Component } from 'react';
import {Auth} from '../Component/Auth/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';



 const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth()? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/certo', state: { from: props.location } }} />
    )
    )} />
  );


export default function Routes() {

    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
           <PrivateRoute path='/certo' component={() => <h1>Você está logado</h1>} /> 
          <Route exact path='/cadastro' component={Cadastro} />
        </Switch>
      </BrowserRouter>
  
    );

  
}