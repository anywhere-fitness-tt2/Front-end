import axios from 'axios'; //eslint-disable-next-line
import axiosAuth from '../utils/axiosWithAuth';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

/******************************** LOGIN *************************************************/
/******************************** LOGIN *************************************************/

export const login = credentials => dispatch => { 
  dispatch({ type: LOGIN_START });
    axios
    .post('https://af-api-tt2.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      dispatch({ type:LOGIN_SUCCESS, payload: res.data.token })
      localStorage.setItem("token", res.data.token)
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message })
    })
}

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

/******************************** LOGOUT *************************************************/
/******************************** LOGOUT *************************************************/

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS })
  localStorage.removeItem('token');
}

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

/******************************** REGISTER *************************************************/
/******************************** REGISTER *************************************************/

export const register = (credentials, registerRedirect) => dispatch => {
  dispatch({ type: REGISTER_START })
  axios
  .post('https://af-api-tt2.herokuapp.com/api/auth/register', credentials)
  .then(res => {
    dispatch({ type:REGISTER_SUCCESS, payload: res.data })
    
    dispatch({ type: LOGIN_START })
    axiosAuth()
    .post('https://af-api-tt2.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      dispatch({ type:LOGIN_SUCCESS, payload: res.data.user })
      localStorage.setItem('token',res.data.token)
      registerRedirect()
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message })
      console.log(err)
    })
    console.log(res)
    // if(res.data.payload.user.role === 'student') {
    //   console.log('Im a student')
    // } else if (res.data.payload.user.role === 'instructor') {
    //   console.log('im an instructor')
    // }
  })
  .catch(err => {
    dispatch({ type: REGISTER_FAILURE, payload: err.message })
  })
}

/******************************** REDIRECT *************************************************/
/******************************** REDIRECT *************************************************/

// export const REDIRECT = "REDIRECT";

// export const redirect = link => {
//   console.log('=== Redirect action dispatched ===')
//   return { type:REDIRECT, payload: link }
// };

/******************************** GETCLASSES *************************************************/
/******************************** GETCLASSES *************************************************/

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