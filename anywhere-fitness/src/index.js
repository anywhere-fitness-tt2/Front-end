import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme/theme';
import ClientProfile from './components/ClientProfile';
import InstructorProfile from './components/InstructorProfile';
import PrivateRoute from './utils/PrivateRoute';
import CustomizedSteppers from './components/Onboarding';

import 'normalize.css';
import './index.css';

import store from './utils/Store';

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ...error handling
  }
};

window.onbeforeunload = (e) => {
  const state = store.getState();
  saveState(state);
};

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Switch>
          <PrivateRoute
            exact
            path='/instructor-profile/:id/onboarding'
            component={CustomizedSteppers}
          />
          <PrivateRoute
            exact
            path='/client-profile/:id/onboarding'
            component={CustomizedSteppers}
          />
          <PrivateRoute
            exact
            path='/instructor-profile/:id'
            component={InstructorProfile}
          />
          <PrivateRoute
            exact
            path='/client-profile/:id'
            component={ClientProfile}
          />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={App} />
        </Switch>
      </Provider>
      <Footer />
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
