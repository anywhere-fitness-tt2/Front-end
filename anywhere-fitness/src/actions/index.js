import axios from 'axios'; //eslint-disable-next-line
import axiosAuth from '../utils/axiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => { 
  dispatch({ type: LOGIN_START });
    axios
    .post('something/login', credentials)
    .then(res => {
      dispatch({ type:LOGIN_SUCCESS, payload: res.data.token })
      localStorage.setItem("token", res.data.token)
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message })
    })
}

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS })
  localStorage.removeItem('token');
}

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = credentials => dispatch => {
  dispatch({ type: REGISTER_START })
  axios
  .post('enter endpoint here that gets token', credentials)
  .then(res => {
    dispatch({ type:REGISTER_SUCCESS, payload: res.data.token })
    localStorage.setItem("token", res.data.token)
  })
  .catch(err => {
    dispatch({ type: REGISTER_FAILURE, payload: err.message })
  })
}

export const getClasses = id => dispatch => {

}


/*

login start ✔
login success ✔
login fail ✔

registration start ✔
registration success ✔
registration fail ✔

logout success ✔

get classes start
get classes success
get classes fail

*/