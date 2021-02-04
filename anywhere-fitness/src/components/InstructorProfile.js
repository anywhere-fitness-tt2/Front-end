// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';

import InstructorClassCard from './InstructorClassCard';
import InstructorEditClass from './InstructorEditClass';
import ClassForm from './ClassForm';
import { getInstructorClasses } from '../actions';

const initialFormValues = {
  name: '',
  type: '',
  time: '',
  duration: '',
  intensityLvl: '',
  location: '',
  attendees: '',
  maxSize: '',
};

const InstructorProfile = (props) => {
  // eslint-disable-next-line
  const [formValues, setFormValues] = useState(initialFormValues); // eslint-disable-next-line
  // const [workouts, setWorkouts] = useState([]); // eslint-disable-next-line
  // const [userWorkouts, setUserWorkouts] = useState(initialWorkouts); // eslint-disable-next-line
  const [isEditing, setIsEditing] = useState(false);
  const [workoutToEdit, setWorkoutToEdit] = useState('');

  // const { id } = useParams();

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
    console.log('form submitted!');
    // no action yet, addClass
    // history.push to instructor profile
  };

  const editWorkout = (workout) => {
    setIsEditing(true);
    setWorkoutToEdit(workout);
  };

  const saveEdit = (workout) => {
    // action needed
    // put
  };

  const deleteWorkout = () => {
    // action needed
    // delete
    console.log('workout deleted');
    setIsEditing(false);
  };

  console.log(props.classes);

  return (
    <Container>
      <h1>Welcome {props.user.username}</h1>
      <ClassForm
        formValues={formValues}
        handleChange={handleChange}
        handleClassSubmit={handleClassSubmit}
      />

      <div className='classContainer'>
        {props.classes.map((workout) => {
          return (
            <InstructorClassCard
              key={workout.classId}
              className='classCard'
              workout={workout}
              editWorkout={editWorkout}
              deleteWorkout={deleteWorkout}
            />
          );
        })}
      </div>
      <div className='editMenu'>
        {isEditing && (
          <InstructorEditClass
            setIsEditing={setIsEditing}
            workoutToEdit={workoutToEdit}
            setWorkoutToEdit={setWorkoutToEdit}
            saveEdit={saveEdit}
          />
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    classes: state.instructorReducer.instructorClasses,
  };
};

export default connect(mapStateToProps, { getInstructorClasses })(
  InstructorProfile,
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('https://i.imgur.com/8FndkHz.jpg');
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
