import React, { Component } from 'react';
import isAuthenticated from '../Component/Auth/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated()? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )
  )} />
);


export default function Routes() {

    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/cadastro' component={Cadastro} />
        </Switch>
      </BrowserRouter>
  
    );

  
}