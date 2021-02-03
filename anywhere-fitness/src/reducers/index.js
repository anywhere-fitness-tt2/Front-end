import { combineReducers } from 'redux';
// import reducers below
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import { instructorReducer } from './instructorReducer';
import { clientReducer } from './clientReducer';


export default combineReducers ({
  // export reducers below
  loginReducer,
  registerReducer,
  instructorReducer,
  clientReducer,
})
