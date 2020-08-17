import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';


export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/cadastro' component={Cadastro} />
      </Switch>
    </BrowserRouter>

  );
}