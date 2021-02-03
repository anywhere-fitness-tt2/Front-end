import {
  GET_CLIENT_CLASS_BY_ID_START,
  GET_CLIENT_CLASS_BY_ID_SUCCESS,
  GET_CLIENT_CLASS_BY_ID_FAILURE,
  SIGNUP_CLASS_START,
  SIGNUP_CLASS_SUCCESS,
  SIGNUP_CLASS_FAILURE
} from '../actions';

const initialState = {
  clientClasses: [],
  clientSignup: [],
  isLoading: false,
  error:""
}

export const clientReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CLIENT_CLASS_BY_ID_START:
      return {
        ...state,
        isLoading: true,
      }
    case GET_CLIENT_CLASS_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clientClasses: action.payload
      }
    case GET_CLIENT_CLASS_BY_ID_FAILURE:
      return {
        ...state,
        isLoading:false,
        error: action.payload
      }
    case SIGNUP_CLASS_START:
      return {
        ...state,
        isLoading:true,
      }
    case SIGNUP_CLASS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        clientSignup: action.payload,
      }
    case SIGNUP_CLASS_FAILURE:
      return {
        ...state,
        isLoading:false,
        error:action.payload
      }
    default:
      return state;
  }
}