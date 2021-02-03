// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InstructorClassCard from './InstructorClassCard';
import InstructorEditClass from './InstructorEditClass';
import ClassForm from './ClassForm';

const initialWorkouts = [
  {
    id: 123, // added id for dummy data
    name: "Billy's Bootcamp",
    type: 'Boxing',
    time: '2pm', // use datetime input for instructor form?
    duration: '3 minutes',
    intensityLvl: 'Medium',
    location: "Billy's Basement",
    attendees: '3',
    maxSize: '6',
  },
  {
    id: 321, // added id for dummy data
    name: "Gump's Cross Country",
    type: 'Running',
    time: '3pm', // use datetime input for instructor form?
    duration: '1 Year',
    intensityLvl: 'High',
    location: 'Highway 61',
    attendees: '1',
    maxSize: '20',
  },
];

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
  const [workouts, setWorkouts] = useState(initialWorkouts); // eslint-disable-next-line
  const [userWorkouts, setUserWorkouts] = useState(initialWorkouts); // eslint-disable-next-line
  const [isEditing, setIsEditing] = useState(false);
  const [workoutToEdit, setWorkoutToEdit] = useState('');

  // Will render upcoming classes by instructor id
  // useEffect(() => {

  // no action yet, getallclassbyid

  // },[])

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

  return (
    <Container>
      <h1>Welcome {props.user.username}</h1>
      <ClassForm
        formValues={formValues}
        handleChange={handleChange}
        handleClassSubmit={handleClassSubmit}
      />

      <div className='classContainer'>
        {workouts.map((workout) => {
          return (
            <InstructorClassCard
              key={workout.id}
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
  };
};

export default connect(mapStateToProps)(InstructorProfile);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
