import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions';

const initialFormValues = {
  username: '',
  role: '',
  password: '',
  // confirmPassword: '',
  email: '',
};

const Registration = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const registerRedirect = (id, role) => {
    role === 'instructor'
      ? push(`/instructor-profile/${id}`)
      : push(`/client-profile/${id}`);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    //check if one of the fields is empty
    if (
      !formValues.username ||
      !formValues.password ||
      !formValues.email ||
      !formValues.role
    ) {
      console.log('Some input is not filled!');
      return;
    }
    props.register(formValues, registerRedirect);
    console.log(props.user.userId);

    setFormValues(initialFormValues);
  };

  return (
    <Container>
      <Form className='signup-form' onSubmit={onSubmit}>
        <h1>Create an Account</h1>
        <label>
          <span className='input-name'>Username</span>
          <input
            name='username'
            type='text'
            value={formValues.username}
            onChange={onChange}
          ></input>
        </label>
        <label>
          <span className='input-name'>Role</span>
          <select onChange={onChange} value={formValues.role} name='role'>
            <option value=''>--- Role ---</option>
            <option value='student'>Student</option>
            <option value='instructor'>Instructor</option>
          </select>
        </label>
        <label>
          <span className='input-name'>Password</span>
          <input
            name='password'
            type='password'
            value={formValues.password}
            onChange={onChange}
          ></input>
        </label>
        {/* <label><span className='input-name'>Confirm Password</span>
          <input
            name='confirmPassword'
            type='password'
            value={formValues.confirmPassword}
            onChange={onChange}
          ></input>
        </label> */}
        <label>
          <span className='input-name'>Email</span>
          <input
            name='email'
            type='email'
            value={formValues.email}
            onChange={onChange}
          ></input>
        </label>
        <button>Sign Up</button>
        <div className='button' onClick={() => push('/login')}>
          Already have an account?
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    loggedIn: state.loginReducer.loggedIn,
    loggingIn: state.loginReducer.loggingIn,
    error: state.loginReducer.error,
  };
};

export default connect(mapStateToProps, { register })(Registration);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.midGray};
  padding: 2vw 4vw;
  margin: 8vh 0;

  font-family: ${(props) => props.theme.bodyFont};
  color: ${(props) => props.theme.yellow};

  h1 {
    font-family: ${(props) => props.theme.titleFont};
  }

  label {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
  }

  input {
    width: 150px;
    background-color: ${(props) => props.theme.lightGray};
  }
  select {
    width: 157px;
    background-color: ${(props) => props.theme.lightGray};
  }

  button {
    background-color: ${(props) => props.theme.midGray};
    border: 1px solid ${(props) => props.theme.yellow};
    color: whitesmoke;
    padding: 7px 0;

    :hover {
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.midGray};
    }
  }
  //div button ("already have an account?")
  .button {
    padding: 4px 0;
    margin-top: 5px;
    font-size: 0.9em;
    :hover {
      color: whitesmoke;
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  background-image: url('https://i.imgur.com/8FndkHz.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
