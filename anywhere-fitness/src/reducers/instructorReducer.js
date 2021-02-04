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
  GET_CLASSES_INSTRUCTOR_START,
  GET_CLASSES_INSTRUCTOR_SUCCESS,
  GET_CLASSES_INSTRUCTOR_FAILURE,
} from '../actions';

const initialState = {
  instructorClasses: [],
  isLoading: false,
  newClass: {},
  error: '',
};

export const instructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CLASS_START:
      return {
        ...state,
        newClass: {},
        isLoading: true,
      };
    case CREATE_CLASS_SUCCESS:
      return {
        ...state,
        newClass: action.payload,
        isLoading: false,
      };
    case CREATE_CLASS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_CLASS_START:
      return {
        ...state,
      };
    case UPDATE_CLASS_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_CLASS_FAILURE:
      return {
        ...state,
      };
    case DELETE_CLASS_START:
      return {
        ...state,
      };
    case DELETE_CLASS_SUCCESS:
      return {
        ...state,
      };
    case DELETE_CLASS_FAILURE:
      return {
        ...state,
      };
    case GET_CLASSES_INSTRUCTOR_START:
      return {
        ...state,
        instructorClasses: [],
        isLoading: true,
      };
    case GET_CLASSES_INSTRUCTOR_SUCCESS:
      return {
        ...state,
        instructorClasses: action.payload,
        isLoading: false,
      };
    case GET_CLASSES_INSTRUCTOR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
