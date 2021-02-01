import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
  email: '',
  password: '',
}

export default function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const onChange = evt => {
    const { name, value } = evt.target
    setFormValues({...formValues, [name]:value})
  }

  const onSubmit = evt => {
    evt.preventDefault()

    //Cancel submit if one field is empty
    if(!formValues.email || !formValues.password){ return }

    axios
        .post('fakeapi.com', formValues)
        .then(res => {
          console.log("POST RESPONSE:", res) //NEED UPDATE WITH BACKEND
          setFormValues(initialFormValues)
        })
        .catch(err => console.log(err))
  }


  return (
    <>
      <h1>Login Page</h1>
      <form>
        <label><span>Email:</span>
          <input
            name='email'
            value= { formValues.email }
            type='email'
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
