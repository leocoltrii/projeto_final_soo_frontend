import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './features/login/login';

import {Router, Switch, Route } from 'react-router-dom';
import routerHistory from './core/router/routerHistory';


ReactDOM.render(
  <Router history={routerHistory}>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/login" exact={true} component={Login}/>
    </Switch>
  </Router>,

  document.getElementById('root')
);