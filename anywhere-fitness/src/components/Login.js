import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';


const initialFormValues = {
  username: '',
  password: '',
}

const Login = props => {
  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]:value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    login(formValues)

    //Cancel submit if one field is empty
    if(!formValues.username || !formValues.password){ return }
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
    user: state.smurfs,
    instructor: state.instructor,
    loggedIn: state.loggedIn,
    loggingIn: state.loggingIn,
    error: state.error
  }
}

export default connect(mapStateToProps, { login })(Login)