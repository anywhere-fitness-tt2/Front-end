import axios from 'axios'; //eslint-disable-next-line
import axiosAuth from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials, loginRedirect) => (dispatch) => {
  dispatch({ type: LOGIN_START });

  axios
    .post('https://af-api-tt2.herokuapp.com/api/auth/login', credentials)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
      localStorage.setItem('token', res.data.token);
      loginRedirect(res.data.user.userId, res.data.user.role);
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err.message });
    });
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
  localStorage.removeItem('token');
};

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (credentials, registerRedirect) => (dispatch) => {
  const userInfo = {
    username: credentials.username,
    password: credentials.password,
  };
  dispatch({ type: REGISTER_START });
  axios
    .post('https://af-api-tt2.herokuapp.com/api/auth/register', credentials)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      axios
        .post('https://af-api-tt2.herokuapp.com/api/auth/login', userInfo)
        .then((res) => {
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.user });
          localStorage.setItem('token', res.data.token);
          registerRedirect(res.data.user.userId, res.data.user.role);
        })
        .catch((err) => {
          dispatch({ type: LOGIN_FAILURE, payload: err.message });
        });
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAILURE, payload: err.message });
    });
};

export const CREATE_CLASS_START = 'CREATE_CLASS_START';
export const CREATE_CLASS_SUCCESS = 'CREATE_CLASS_SUCCESS';
export const CREATE_CLASS_FAILURE = 'CREATE_CLASS_FAILURE';

export const createClass = (singleClass) => (dispatch) => {
  dispatch({ type: CREATE_CLASS_START });
};

export const UPDATE_CLASS_START = 'UPDATE_CLASS_START';
export const UPDATE_CLASS_SUCCESS = 'UPDATE_CLASS_SUCCESS';
export const UPDATE_CLASS_FAILURE = 'UPDATE_CLASS_FAILURE';

export const GET_CLIENT_CLASS_BY_ID_START = 'GET_CLIENT_CLASS_BY_ID_START';
export const GET_CLIENT_CLASS_BY_ID_SUCCESS = 'GET_CLIENT_CLASS_BY_ID_SUCCESS';
export const GET_CLIENT_CLASS_BY_ID_FAILURE = 'GET_CLIENT_CLASS_BY_ID_FAILURE';

export const getClientClassById = (id) => (dispatch) => {
  dispatch({ type: GET_CLIENT_CLASS_BY_ID_START });

  axiosAuth()
    .get(`/api/users/${id}/classes`)
    .then((res) => {
      dispatch({ type: GET_CLIENT_CLASS_BY_ID_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_CLIENT_CLASS_BY_ID_FAILURE, payload: err.message });
    });
};

export const GET_CLASSES_INSTRUCTOR_START = 'GET_CLASSES_INSTRUCTOR_START';
export const GET_CLASSES_INSTRUCTOR_SUCCESS = 'GET_CLASSES_INSTRUCTOR_SUCCESS';
export const GET_CLASSES_INSTRUCTOR_FAILURE = 'GET_CLASSES_INSTRUCTOR_FAILURE';

export const getInstructorClasses = (currentUsername) => (dispatch) => {
  dispatch({ type: GET_CLASSES_INSTRUCTOR_START });

  axiosAuth()
    .get('api/classes/')
    .then((res) => {
      const filteredData = res.data.filter(
        (workout) => workout.username === currentUsername,
      );
      dispatch({ type: GET_CLASSES_INSTRUCTOR_SUCCESS, payload: filteredData });
    })
    .catch((err) => {
      dispatch({
        type: GET_CLASSES_INSTRUCTOR_FAILURE,
        payload: err.message,
      });
    });
};

export const DELETE_CLASS_START = 'DELETE_CLASS_START';
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS';
export const DELETE_CLASS_FAILURE = 'DELETE_CLASS_FAILURE';

export const deleteClass = (classId) => (dispatch) => {
  dispatch({ type: DELETE_CLASS_START });
};

export const GET_CLASS_BY_ID_START = 'GET_CLASS_BY_ID_START';
export const GET_CLASS_BY_ID_SUCCESS = 'GET_CLASS_BY_ID_SUCCESS';
export const GET_CLASS_BY_ID_FAILURE = 'GET_CLASS_BY_ID_FAILURE';

export const getClassById = (id) => (dispatch) => {
  dispatch({ type: GET_CLASS_BY_ID_START });
};

export const SIGNUP_CLASS_START = 'SIGNUP_CLASS_START';
export const SIGNUP_CLASS_SUCCESS = 'SIGNUP_CLASS_SUCCESS';
export const SIGNUP_CLASS_FAILURE = 'SIGNUP_CLASS_FAILURE';

export const signupClass = (classId) => (dispatch) => {
  dispatch({ type: SIGNUP_CLASS_START });
};
