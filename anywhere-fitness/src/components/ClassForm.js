import React, { useState } from 'react';
import styled from 'styled-components';

const ClassForm = ({ formValues, handleChange, handleClassSubmit }) => {
  const [hidden, setHidden] = useState('form-hide');

  const hideHandler = () => {
    if (hidden === 'form-hide') {
      setHidden('form-show');
    }
    if (hidden === 'form-show') {
      setHidden('form-hide');
    }
  };
  return (
    <Container>
      <button className='hide-button' onClick={hideHandler}>
        Create a new Class
      </button>
      <FormWrapper>
        <form className={hidden} onSubmit={handleClassSubmit}>
          <div className='form-input'>
            <label htmlFor='name'> Name :</label>
            <input
              type='text'
              name='name'
              placeholder='Enter Name'
              onChange={handleChange}
              value={formValues.name}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='type'>Type :</label>
            <input
              type='text'
              name='type'
              className='form-input'
              placeholder='Enter Type'
              onChange={handleChange}
              value={formValues.type}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='time'>Time :</label>
            <input
              type='time'
              name='time'
              className='form-input'
              placeholder='Enter Time'
              onChange={handleChange}
              value={formValues.time}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='duration'>Duration :</label>
            <input
              type='text'
              name='duration'
              className='form-input'
              placeholder='Enter Duration'
              onChange={handleChange}
              value={formValues.duration}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='intensityLvl'>Intensity :</label>
            <input
              type='range'
              min='0'
              max='10'
              name='intensityLvl'
              className='form-input'
              placeholder='Enter Intensity'
              onChange={handleChange}
              value={formValues.intensityLvl}
            />
          </div>
          <div className='form-input'>
            <label htmlFor='location'>Location :</label>
            <input
              type='text'
              name='location'
              className='form-input'
              placeholder='Enter Location'
              onChange={handleChange}
              value={formValues.location}
            />
          </div>
          {/* <label className="formLabel"> Attending :
          <input
          type="number"
          name="attendees"
          className="form-input"
          placeholder="Enter Attendees"
          onChange={handleChange}
          value={formValues.attendees}
          />
        </label> */}
          <div className='form-input'>
            <label htmlFor='maxSize'>Class Limit :</label>
            <input
              type='number'
              name='maxSize'
              className='form-input'
              placeholder='Enter Class Limit'
              onChange={handleChange}
              value={formValues.maxSize}
            />
          </div>

          <button className='submitBtn'>Add Class!</button>
        </form>
      </FormWrapper>
    </Container>
  );
};

export default ClassForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  align-items: center;
  justify-content: center;
  margin: 30px;
  font-family: ${(props) => props.theme.bodyFont};

  .hide-button {
    padding: 15px 25px;
    margin: 8px auto;
    width: 200px;
    background-color: ${(props) => props.theme.midGray};
    border: 1px solid ${(props) => props.theme.yellow};
    color: whitesmoke;

    &:hover {
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.midGray};
    }
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.midGray};
  margin: 20px;

  form {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .form-input {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
      color: ${(props) => props.theme.yellow};
      margin-right: 40px;
    }

    input {
      text-align: center;
      padding: 5px;
      margin: 8px;
      background-color: ${(props) => props.theme.midGray};
      border: 1px solid ${(props) => props.theme.yellow};
      color: whitesmoke;

      &::placeholder {
        color: whitesmoke;
      }
    }
  }

  .submitBtn {
    margin: 8px auto;
    width: 200px;
    padding: 10px 20px;
    background-color: ${(props) => props.theme.midGray};
    border: 1px solid ${(props) => props.theme.yellow};
    color: whitesmoke;

    &:hover {
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.midGray};
    }
  }

  .form-hide {
    display: none;
  }
`;
