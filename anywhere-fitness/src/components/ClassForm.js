import React from 'react';
import styled from 'styled-components';

const StyledClassForm = styled.form`
display:flex;
flex-flow:column nowrap;
align-items:center;
text-align:center;
background:green;
`

const ClassForm = props => {
  const { formValues, handleChange, handleClassSubmit } = props;



  return (
      <StyledClassForm className="formGroup" onSubmit={handleClassSubmit}>
        <label className="formLabel"> Name :
          <input
          type="text"
          name="name"
          className="formInput"
          placeholder="Enter Name"
          onChange={handleChange}
          value={formValues.name}
          />
        </label>
        <label className="formLabel"> Type :
          <input
          type="text"
          name="type"
          className="formInput"
          placeholder="Enter Type"
          onChange={handleChange}
          value={formValues.type}
          />
        </label>
        <label className="formLabel"> Time :
          <input
          type="text"
          name="time"
          className="formInput"
          placeholder="Enter Time"
          onChange={handleChange}
          value={formValues.time}
          />
        </label>
        <label className="formLabel"> Duration :
          <input
          type="text"
          name="duration"
          className="formInput"
          placeholder="Enter Duration"
          onChange={handleChange}
          value={formValues.duration}
          />
        </label>
        <label className="formLabel"> Intensity :
          <input
          type="text"
          name="intensityLvl"
          className="formInput"
          placeholder="Enter Intensity"
          onChange={handleChange}
          value={formValues.intensityLvl}
          />
        </label>
        <label className="formLabel"> Location :
          <input
          type="text"
          name="location"
          className="formInput"
          placeholder="Enter Location"
          onChange={handleChange}
          value={formValues.location}
          />
        </label>
        <label className="formLabel"> Attending :
          <input
          type="text"
          name="attendees"
          className="formInput"
          placeholder="Enter Attendees"
          onChange={handleChange}
          value={formValues.attendees}
          />
        </label>
        <label className="formLabel"> Class Limit :
          <input
          type="text"
          name="maxSize"
          className="formInput"
          placeholder="Enter Class Limit"
          onChange={handleChange}
          value={formValues.maxSize}
          />
        </label>
        <button>Add Class!</button>
      </StyledClassForm>
  )
}

export default ClassForm
