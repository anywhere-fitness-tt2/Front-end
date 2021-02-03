import { combineReducers } from 'redux';
// import reducers below
import { loginReducer } from './loginReducer';
import { logoutReducer } from './logoutReducer';
import { registerReducer } from './registerReducer';
import { instructorReducer } from './instructorReducer';
import { clientReducer } from './clientReducer';

export default combineReducers({
  // export reducers below
  loginReducer,
  logoutReducer,
  registerReducer,
  instructorReducer,
  clientReducer,
});
