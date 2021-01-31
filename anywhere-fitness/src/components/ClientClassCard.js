import React from 'react';
import styled from 'styled-components';

const StyledClassCard = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;
justify-content:center;
padding: 10px;
border: 4px solid yellow;

`

const ClientClassCard = props => {
  const { workout : { name, type, duration, intensity , location, registered, maxClassSize } } = props;

  return (
    <StyledClassCard className="classCard">
      <h2>{name}</h2>
      <p>Exercise: {type}</p>
      <p>Duration: {duration}</p>
      <p>Intensity: {intensity}</p>
      <p>Location: {location}</p>
      <p>Attending: {registered}</p>
      <p>Class Limit: {maxClassSize}</p>
    </StyledClassCard>
  )
}

export default ClientClassCard
