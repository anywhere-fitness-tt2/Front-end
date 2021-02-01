import axios from 'axios';
import React, { useState } from 'react';

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
    <>
      <h1>Registration Page</h1>
      <form className='signup-form'>
        <label><span>Username</span>
          <input
            name='username'
            type='text'
            value={formValues.username}
            onChange={onChange}
          ></input>
        </label>

        <label><span>Role</span>
          <select onChange={onChange} value={formValues.role} name='role'>
            <option value=''>-- Role --</option>
            <option value='member' >Member</option>
            <option value='coach' >Coach</option>
          </select>
        </label>

        <label><span>Password</span>
          <input
            name='password'
            type='password'
            value={formValues.password}
            onChange={onChange}
          ></input>
        </label>

        <label><span>Confirm Password</span>
          <input
            name='confirmPassword'
            type='password'
            value={formValues.confirmPassword}
            onChange={onChange}
          ></input>
        </label>

        <label><span>Email</span>
          <input
            name='email'
            type='email'
            value={formValues.email}
            onChange={onChange}
          ></input>
        </label>

        <button onClick={onClick}>Sign Up</button>

      </form>
    </>
  );
}
