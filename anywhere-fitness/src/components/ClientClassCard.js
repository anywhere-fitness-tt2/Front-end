import React from 'react';
import styled from 'styled-components';

const StyledClassCard = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
`

const ClientClassCard = props => { //eslint-disable-next-line
  const { signUp, leaveClass, workout : { name, type, time, duration, intensityLvl , location, attendees, maxSize } } = props;

  return (
    <StyledClassCard className="classCard">
      <h2 className="label">{name}</h2>
      <p className="label">Exercise Type: {type}</p>
      <p className="label">Time: {time}</p>
      <p className="label">Duration: {duration}</p>
      <p className="label">Intensity: {intensityLvl}</p>
      <p className="label">Location: {location}</p>
      <p className="label">Attending: {attendees}</p>
      <p className="label">Class Limit: {maxSize}</p>
      <button onClick={leaveClass}>Leave Class</button>
    </StyledClassCard>
  )
}

export default ClientClassCard;
