import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';
import Header from './components/Header';
import theme from './theme/theme';

import 'normalize.css';
import './index.css';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={App} />
      </Switch>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
