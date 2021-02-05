import React from 'react';
import styled from 'styled-components';

const InstructorClassCard = (props) => {
  const {
    deleteWorkout,
    workout: {
      name,
      type,
      time,
      duration,
      intensityLvl,
      location,
      attendees,
      maxSize,
      classId,
    },
  } = props;

  const deleteHandler = () => {
    deleteWorkout(classId, props.workout);
  };

  return (
    <ClassCard className='classCard'>
      <h2>{name}</h2>
      <div className='text-wrapper'>
        <p>
          <span>Exercise:</span> {type}
        </p>
        <p>
          <span>Time:</span> {time}
        </p>
        <p>
          <span>Duration:</span> {duration}
        </p>
        <p>
          <span>Intensity:</span> {intensityLvl}
        </p>
        <p>
          <span>Location:</span> {location}
        </p>
        <p>
          <span>Attending:</span> {attendees}
        </p>
        <p>
          <span>Class Limit:</span> {maxSize}
        </p>
      </div>
      <button onClick={deleteHandler}>Delete</button>
    </ClassCard>
  );
};

export default InstructorClassCard;

const ClassCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  font-family: ${(props) => props.theme.bodyFont};
  width: 400px;
  background-color: ${(props) => props.theme.midGray};
  margin: 20px;
  text-align: left;
  padding: 15px;

  h2 {
    color: ${(props) => props.theme.yellow};
    font-family: ${(props) => props.theme.titleFont};
  }
  p {
    margin: 10px;
  }

  span {
    color: ${(props) => props.theme.yellow};
    display: block;
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    text-align: center;
  }

  button {
    margin: 20px;
    padding: 5px;
    width: 80px;
    font-family: ${(props) => props.theme.bodyFont};
    border: 1px solid ${(props) => props.theme.yellow};
    background-color: ${(props) => props.theme.midGray};
    color: whitesmoke;

    &:hover {
      background-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.midGray};
    }
  }
`;
