import React from 'react';
import styled from 'styled-components';

const StyledInstructorEditClass = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

// need to pull data from clicked workout to fill in input lines on editClass form

const InstructorEditClass = (props) => {
  //eslint-disable-next-line
  const {
    setIsEditing,
    workoutToEdit,
    setWorkoutToEdit,
    saveEdit,
    // workouts,
  } = props;

  return (
    <StyledInstructorEditClass className='editForm' onSubmit={saveEdit}>
      <h3>Edit Workout</h3>
      <label className='formLabel'>
        {' '}
        Name :
        <input
          type='text'
          name='name'
          className='formInput'
          placeholder='Enter Name'
          onChange={(e) =>
            setWorkoutToEdit({ ...workoutToEdit, name: e.target.value })
          }
          value={workoutToEdit.name}
        />
      </label>
      <label className='formLabel'>
        {' '}
        Type :
        <input
          type='text'
          name='type'
          className='formInput'
          placeholder='Enter Type'
          onChange={(e) =>
            setWorkoutToEdit({ ...workoutToEdit, type: e.target.value })
          }
          value={workoutToEdit.type}
        />
      </label>
      <label className='formLabel'>
        {' '}
        Time :
        <input
          type='time'
          name='time'
          className='formInput'
          placeholder='Enter Time'
          onChange={(e) =>
            setWorkoutToEdit({ ...workoutToEdit, time: e.target.value })
          }
          value={workoutToEdit.time}
        />
      </label>
      <label className='formLabel'>
        {' '}
        Duration :
        <input
          type='text'
          name='duration'
          className='formInput'
          placeholder='Enter Duration'
          onChange={(e) =>
            setWorkoutToEdit({ ...workoutToEdit, duration: e.target.value })
          }
          value={workoutToEdit.duration}
        />
      </label>
      <label className='formLabel'>
        {' '}
        Intensity :
        <input
          type='range'
          min='0'
          max='10'
          name='intensityLvl'
          className='formInput'
          placeholder='Enter Intensity'
          onChange={(e) =>
            setWorkoutToEdit({ ...workoutToEdit, intensity: e.target.value })
          }
          value={workoutToEdit.intensityLvl}
        />
      </label>
      <label className='formLabel'>
        {' '}
        Location :
        <input
          type='text'
          name='location'
          className='formInput'
          placeholder='Enter Location'
          onChange={(e) =>
            setWorkoutToEdit({ ...workoutToEdit, location: e.target.value })
          }
          value={workoutToEdit.location}
        />
      </label>
      {/* <label className="formLabel"> Attending :
          <input
          type="number"
          name="attendees"
          className="formInput"
          placeholder="Enter Attendees"
          onChange={e=>setWorkoutToEdit({...workoutToEdit, attendees:e.target.value})}
          value={workoutToEdit.attendees}
          />
        </label> */}
      <label className='formLabel'>
        {' '}
        Class Limit :
        <input
          type='number'
          name='maxSize'
          className='formInput'
          placeholder='Enter Class Limit'
          onChange={(e) =>
            setWorkoutToEdit({ ...workoutToEdit, maxSize: e.target.value })
          }
          value={workoutToEdit.maxSize}
        />
      </label>
      <button type='submit'>Save</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </StyledInstructorEditClass>
  );
};

export default InstructorEditClass;
