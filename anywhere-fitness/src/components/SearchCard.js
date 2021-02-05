import React from 'react';
import styled from 'styled-components';

const StyledSearchCard = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;

`

const SearchCard = props => { //eslint-disable-next-line
  const { signUp, workout : { name, type, time, duration, intensityLvl , location, attendees, maxSize, classId } } = props;

  const handleEnroll = () => {
    console.log('signed up!!!!!')
    signUp(classId)
  }

  return (
    <StyledSearchCard className="classCard">
      <h2 className="title">{name}</h2>
      <h3 className="label">Time</h3>
      <p>{time}</p>
      <h3 className="label">Duration</h3>
      <p>{duration}</p>
      <h3 className="label">Intensity</h3>
      <p>{intensityLvl}</p>
      <h3 className="label">Location</h3>
      <p>{location}</p>
      <h3 className="label">Attending</h3>
      <p>{attendees}</p>
      <h3 className="label">Class Limit</h3>
      <p>{maxSize}</p>
      <button onClick={handleEnroll}>Sign Up</button>
    </StyledSearchCard>
  )
}

export default SearchCard;