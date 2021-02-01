import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
  username: '',
  password: '',
}

const Login = props => {
  const [formValues, setFormValues] = useState(initialFormValues)
  //eslint-disable-next-line
  const history = useHistory();

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]:value})
  }

  const onSubmit = evt => {
    evt.preventDefault();
    if(!formValues.username || !formValues.password){ return };

    login(formValues);
    setFormValues(initialFormValues);

    // push to protected user/instruc profile
    // history.push() 
  }

  return (
    <>
      <h1>Login Page</h1>
      <form>
        <label><span>Username:</span>
          <input
            name='username'
            value= { formValues.username }
            type='text'
            onChange={ onChange }
          ></input>
        </label>

        <label><span>Password:</span>
          <input
            name='password'
            value= { formValues.password }
            type='password'
            onChange={ onChange }
          ></input>
        </label>

        <button onClick={onSubmit} >Log In</button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    instructor: state.instructor,
    loggedIn: state.loggedIn,
    loggingIn: state.loggingIn,
    error: state.error
  }
}

export default connect(mapStateToProps, { login })(Login)