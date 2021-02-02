import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '../actions';

const initialState = {
  user: {},
  role: '',
  loggedIn: false,
  loggingIn: false,
  error: '',
};

/* Make separate client / role login reducers? */

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        user: {},
        role: false, // how to handle role, boolean activated by checkbox/drop down menu?
        loggedIn: false,
        loggingIn: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        role: false,
        loggedIn: true,
        loggingIn: false,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: [],
        role: false,
        loggedIn: false,
        loggingIn: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
};
