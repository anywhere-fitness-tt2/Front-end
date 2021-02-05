import {
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAILURE
} from '../actions';

const initialState = {
  classes:[],
  isLoading: false,
  error:"",
}

export const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_START:
      return {
        ...state,
        isLoading: true,
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        classes: action.payload,
        isLoading:false
      }
    case SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}