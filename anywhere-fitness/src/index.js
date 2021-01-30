import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';

import 'normalize.css';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/registration' component={Registration} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/' component={App} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
