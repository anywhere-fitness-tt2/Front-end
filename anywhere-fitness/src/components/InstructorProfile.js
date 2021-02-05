import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InstructorClassCard from './InstructorClassCard';
import ClassForm from './ClassForm';

import { getInstructorClasses, createClass, deleteClass } from '../actions';

const initialFormValues = {
  name: '',
  type: '',
  time: '',
  duration: '',
  intensityLvl: '',
  location: '',
  attendees: 0,
  maxSize: '',
};

const InstructorProfile = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    props.getInstructorClasses(props.user.username);
    //eslint-disable-next-line
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleClassSubmit = (event) => {
    event.preventDefault();
    console.log(props.newClass);
    props.createClass(formValues, props.user.username);
    setFormValues(initialFormValues);
  };

  const deleteWorkout = (classId, workout) => {
    props.deleteClass(classId, workout, props.user.userId, props.user.username);
  };

  return (
    <Container>
      <h1>Welcome {props.user.username}</h1>
      <ClassForm
        formValues={formValues}
        handleChange={handleChange}
        handleClassSubmit={handleClassSubmit}
      />

      <CardWrapper>
        {props.classes.map((workout) => {
          return (
            <InstructorClassCard
              key={workout.classId}
              className='classCard'
              workout={workout}
              deleteWorkout={deleteWorkout}
            />
          );
        })}
      </CardWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    classes: state.instructorReducer.instructorClasses,
    newClass: state.instructorReducer.newClass,
  };
};

export default connect(mapStateToProps, {
  getInstructorClasses,
  createClass,
  deleteClass,
})(InstructorProfile);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.theme.backgroundImage});
  background-size: cover;
  min-height: 88vh;
  max-height: 88vh;
  overflow-y: scroll;
  overflow-x: hidden;

  h1 {
    background-color: ${(props) => props.theme.midGray};
    color: ${(props) => props.theme.yellow};
    padding: 15px 30px;
    font-family: ${(props) => props.theme.titleFont};
    font-size: 3rem;
  }

  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #252629;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
