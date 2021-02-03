import {
  GET_CLASS_BY_ID_START,
  GET_CLASS_BY_ID_SUCCESS,
  GET_CLASS_BY_ID_FAILURE,
  SIGNUP_CLASS_START,
  SIGNUP_CLASS_SUCCESS,
  SIGNUP_CLASS_FAILURE
} from '../actions';

const initialState = {
  clientClasses: [],
  isLoading: false,
  error:""
}

export const clientReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CLASS_BY_ID_START:
      return {
        ...state
      }
    case GET_CLASS_BY_ID_SUCCESS:
      return {
        ...state
      }
    case GET_CLASS_BY_ID_FAILURE:
      return {
        ...state
      }
    case SIGNUP_CLASS_START:
      return {
        ...state
      }
    case SIGNUP_CLASS_SUCCESS:
      return {
        ...state
      }
    case SIGNUP_CLASS_FAILURE:
      return {
        ...state
      }
    default:
      return state;
  }
}