import React from 'react';
import styled from 'styled-components';

const StyledSearchCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const SearchCard = (props) => {
  //eslint-disable-next-line
  const {
    signUp,
    workout: {
      name,
      time,
      duration,
      intensityLvl,
      location,
      attendees,
      maxSize,
      classId,
    },
  } = props;

  const handleEnroll = () => {
    console.log('signed up!!!!!');
    signUp(classId);
  };

  return (
    <StyledSearchCard className='classCard'>
      <h2 className='title'>{name}</h2>
      <span>Time</span>
      <p>{time}</p>
      <span>Duration</span>
      <p>{duration}</p>
      <span>Intensity</span>
      <p>{intensityLvl}</p>
      <span>Location</span>
      <p>{location}</p>
      <span>Attending</span>
      <p>{attendees}</p>
      <span>Class Limit</span>
      <p>{maxSize}</p>
      <button onClick={handleEnroll}>Sign Up</button>
    </StyledSearchCard>
  );
};

export default SearchCard;
