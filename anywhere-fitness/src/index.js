import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';

import 'normalize.css';
import './index.css';
import theme from './theme/theme';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={App} />
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
