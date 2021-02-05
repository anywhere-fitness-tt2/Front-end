import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//3, Create a store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    // Error handling
    return undefined;
  }
};

const store = createStore(
  rootReducer,
  loadState(),
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
