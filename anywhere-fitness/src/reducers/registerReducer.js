import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions';

const initialState = {
  user:{},
  role:"",
  error:"",
  creatingUser: false
}

export const registerReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_START:
      return {
        ...state,
        creatingUser: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        creatingUser:false
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
}
