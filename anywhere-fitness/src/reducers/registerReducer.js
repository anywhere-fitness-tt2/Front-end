import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions';

const initialState = {
  user:[],
  error:"",
  creatingUser: false
}

export const registerReducer = (state = initialState, action) => {
  switch(action.type) {
    case REGISTER_START:
      return {
        ...state,
        user:[],
        error:"",
        creatingUser: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error:"",
        creatingUser:false
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        user:[],
        error: action.payload,
        creatingUser: false
      }
    default:
      return state;
  }
}
