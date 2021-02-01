import React from 'react';
import styled from 'styled-components';

const StyledClassCard = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:center;
padding: 10px;
border: 4px solid red;

`

const InstructorClassCard = props => {
  const { deleteWorkout, editWorkout, workout : { name, type, time, duration, intensityLvl , location, attendees, maxSize } } = props;

  return (
    <StyledClassCard className="classCard">
      <h2>{name}</h2>
      <p>Exercise: {type}</p>
      <p>Time: {time}</p>
      <p>Duration: {duration}</p>
      <p>Intensity: {intensityLvl}</p>
      <p>Location: {location}</p>
      <p>Attending: {attendees}</p>
      <p>Class Limit: {maxSize}</p>
      <button onClick={editWorkout}>Edit</button>
      <button onClick={deleteWorkout}>Delete</button>
    </StyledClassCard>
  )
}

export default InstructorClassCard;