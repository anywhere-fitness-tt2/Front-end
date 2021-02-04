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

  const loginRedirect = (id, role) => {
    role === 'instructor'
      ? push(`/instructor-profile/${id}`)
      : push(`/client-profile/${id}`);
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

  console.log(props.user.userId);

  // useEffect(() => {

  // }, []);

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Login</h1>
        <label>
          <span className='input-name'>Username:</span>
          <input
            name='username'
            value={formValues.username}
            type='text'
            onChange={onChange}
          ></input>
        </label>
        <label>
          <span className='input-name'>Password:</span>
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
    loggedIn: state.loginReducer.loggedIn,
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

  .input-name {
    margin-right: 75px;
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
    background-color: ${(props) => props.theme.midGray};
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
