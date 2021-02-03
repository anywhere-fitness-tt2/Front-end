import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';
import Header from './components/Header';
import theme from './theme/theme';
import ClientProfile from './components/ClientProfile';
import InstructorProfile from './components/InstructorProfile';
import PrivateRoute from './utils/PrivateRoute';

import 'normalize.css';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Header />
        <Switch>
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
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
