import {
  CREATE_CLASS_START,
  CREATE_CLASS_SUCCESS,
  CREATE_CLASS_FAILURE,
  UPDATE_CLASS_START,
  UPDATE_CLASS_SUCCESS,
  UPDATE_CLASS_FAILURE,
  DELETE_CLASS_START,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_FAILURE,
  GET_CLASS_BY_ID_START,
  GET_CLASS_BY_ID_SUCCESS,
  GET_CLASS_BY_ID_FAILURE
} from '../actions';

const initialState = {
  instructorClasses: [],
  isLoading: false,
  error:""
}

export const instructorReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CLASS_START:
      return {
        ...state,
      }
    case CREATE_CLASS_SUCCESS:
      return {
        ...state,
      }
    case CREATE_CLASS_FAILURE:
      return {
        ...state,
      }
    case UPDATE_CLASS_START:
      return {
        ...state,
      }
    case UPDATE_CLASS_SUCCESS:
      return {
        ...state,
      }
    case UPDATE_CLASS_FAILURE:
      return {
        ...state,
      }
    case DELETE_CLASS_START:
      return {
        ...state,
      }
    case DELETE_CLASS_SUCCESS:
      return {
        ...state,
      }
    case DELETE_CLASS_FAILURE:
      return {
        ...state,
      }
    case GET_CLASS_BY_ID_START:
      return {
          ...state,
      }
    case GET_CLASS_BY_ID_SUCCESS:
      return {
        ...state,
      }
    case GET_CLASS_BY_ID_FAILURE:
      return {
        ...state,
      }
    default:
      return state;
  }
}