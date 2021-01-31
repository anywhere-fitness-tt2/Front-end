import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = credentials => dispatch => { //credentials will be the state the formValues are contained in
  dispatch({ type: LOGIN_START });
    axios
    .post('enter endpoint here that gets token', credentials)
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

export const registration = credentials => dispatch => {

}

export const getClasses = id => dispatch => {

}


/*

login start ✔
login success ✔
login fail ✔

logout start
logout success

registration start
registration success
registration fail

get classes start
get classes success
get classes fail



*/