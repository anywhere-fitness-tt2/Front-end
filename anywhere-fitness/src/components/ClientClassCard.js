import React from 'react';
import styled from 'styled-components';

const StyledClassCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const ClientClassCard = (props) => {
  //eslint-disable-next-line
  const {
    leaveClass,
    workout: {
      name,
      time,
      duration,
      intensityLvl,
      location,
      attendees,
      maxSize,
    },
  } = props;

  return (
    <StyledClassCard className='classCard'>
      <h2 className='title'>{name}</h2>
      <span>Time:</span>
      <p>{time}</p>
      <span>Duration:</span>
      <p>{duration}</p>
      <span>Intensity:</span>
      <p>{intensityLvl}</p>
      <span>Location:</span>
      <p>{location}</p>
      <span>Attending:</span>
      <p>{attendees}</p>
      <span>Class Limit:</span>
      <p>{maxSize}</p>
      <button onClick={leaveClass}>Leave</button>
    </StyledClassCard>
  );
};

export default ClientClassCard;
