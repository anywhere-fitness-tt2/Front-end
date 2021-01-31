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

const ClassCard = props => {
  const { workout : { name, type, duration, intensity , location, registered, maxClassSize } } = props;

  return (
    <StyledClassCard className="classCard">
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{duration}</p>
      <p>{intensity}</p>
      <p>{location}</p>
      <p>{registered}</p>
      <p>{maxClassSize}</p>
    </StyledClassCard>
  )
}

export default ClassCard
