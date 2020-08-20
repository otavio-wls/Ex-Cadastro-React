import React from 'react';
import { isLogin } from '../Component/Auth/auth';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Clients from '../pages/Client';
import Cadastro from '../pages/Cadastro';
import NotFound from '../pages/NotFound/index';
import {history} from '../history';

//  const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={props => (
//     isLogin()? (
//       <Component {...props} />
//     ) : <Redirect to={{pathname: "/", state: {from: props.location}}}/>    
//     )} />
//   );

export default function Routes() {

  return(
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/clients' component={Clients} /> 
        <Route exact path='/cadastro' component={Cadastro} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>  
  ); 
}