import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Forms from './features/formulario_imovel/formulariot';

import {Router, Switch, Route } from 'react-router-dom';
import routerHistory from './core/router/routerHistory';


ReactDOM.render(
  <Router history={routerHistory}>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/forms" exact={true} component={Forms}/>
    </Switch>
  </Router>,

  document.getElementById('root')
);