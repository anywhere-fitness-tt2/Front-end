import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { login } from '../actions';

const initialFormValues = {
  username: '',
  password: '',
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const loginRedirect = () => {
    props.user.role === 'instuctor'
      ? push('/client-profile')
      : push('/instructor-profile');
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!formValues.username || !formValues.password) {
      return;
    }
    console.log('Login submit');

    props.login(formValues, loginRedirect);
    setFormValues(initialFormValues);
  };

  // useEffect(() => {

  // }, []);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Login Page</h1>
        <label>
          <span>Username</span>
          <input
            name='username'
            value={formValues.username}
            type='text'
            onChange={onChange}
          ></input>
        </label>
        <label>
          <span>Password</span>
          <input
            name='password'
            value={formValues.password}
            type='password'
            onChange={onChange}
          ></input>
        </label>
        <button>Log In</button>
        <div className='button' onClick={() => push('/registration')}>
          Create an account.
        </div>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    error: state.loginReducer.error,
  };
};

export default connect(mapStateToProps, { login })(Login);

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
    background-color: ${(props) => props.theme.yellow};
  }
  //div button ("already have an account?")
  .button {
    padding: 4px 0;
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
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
