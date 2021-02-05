import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledClassCard = styled.div`
display:flex;
flex-flow:column nowrap;
align-items:center;

`

const ClientClassCard = props => { //eslint-disable-next-line
  const { signUp, leaveClass, workout : { name, type, time, duration, intensityLvl , location, attendees, maxSize } } = props;
  
  return (
    <StyledClassCard className="classCard">
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
      { console.log(props.clientClasses.includes(props.workout.id)) 
      ? <button onClick={leaveClass}>Leave Class</button>
      : <button onClick={signUp}>Sign Up</button>
      }
      
    </StyledClassCard>
  )
}

const mapStateToProps = state => {
  return {
    clientClasses: state.clientReducer.clientClasses,
    classes: state.searchReducer.classes
  }
}

export default connect(mapStateToProps,{})(ClientClassCard);
