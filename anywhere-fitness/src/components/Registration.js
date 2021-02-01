import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const initialFormValues = {
  username: '',
  role: '',
  password: '',
  confirmPassword: '',
  email: '',
}

export default function Registration() {

  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]:value})
  }

  const onClick = evt => {
    evt.preventDefault()
    //check for password validity
    if(formValues.password !== formValues.confirmPassword) {
      console.log("WRONG PASSWORD!")
      return
    }
    //check if one of the fields is empty
    if(!formValues.username || !formValues.password || !formValues.email || !formValues.role){
      console.log("Some input is not filled!")
      return
    }
    const newSignUp = {
      username: formValues.username,
      role: formValues.role,
      password: formValues.password,
      email: formValues.email,
    }

    axios
        .post('some.api', newSignUp)
        .then(res => {
          console.log(res)
          setFormValues(initialFormValues)
        })
        .catch(err => console.log(err))
  }


  return (
    <Container>
      <Form className='signup-form'>
        <h1>Create an Account</h1>
        <label><span className='input-name'>Username</span>
          <input
            name='username'
            type='text'
            value={formValues.username}
            onChange={onChange}
          ></input>
        </label>

        <label><span className='input-name'>Role</span>
          <select onChange={onChange} value={formValues.role} name='role'>
            <option value=''>--- Role ---</option>
            <option value='member' >Member</option>
            <option value='coach' >Coach</option>
          </select>
        </label>

        <label><span className='input-name'>Password</span>
          <input
            name='password'
            type='password'
            value={formValues.password}
            onChange={onChange}
          ></input>
        </label>

        <label><span className='input-name'>Confirm Password</span>
          <input
            name='confirmPassword'
            type='password'
            value={formValues.confirmPassword}
            onChange={onChange}
          ></input>
        </label>

        <label><span className='input-name'>Email</span>
          <input
            name='email'
            type='email'
            value={formValues.email}
            onChange={onChange}
          ></input>
        </label>

        <button onClick={onClick}>Sign Up</button>
        <Link to="/">Already have an account?</Link>

      </Form>
    </Container>
  );
}

const Form = styled.form `
  display: flex;
  flex-direction: column;
  background-color: ${ props => props.theme.midGray};;
  padding: 2vw 4vw;
  margin: 8vh 0;
  
  font-family: ${ props  => props.theme.bodyFont};
  color: ${ props  => props.theme.yellow};

  label {
    display:flex;
    justify-content: space-between;
    padding: 8px 0;
  }

  input {
    width: 150px;
    background-color: ${ props => props.theme.lightGray};
  }
  select {
    width: 157px;
    background-color: ${ props => props.theme.lightGray};
  }

  button {
    background-color: ${ props => props.theme.yellow};
  }
`

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