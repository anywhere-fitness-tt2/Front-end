import { LOGOUT_SUCCESS } from '../actions';

const initialState = {
  loggedIn: true,
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};
