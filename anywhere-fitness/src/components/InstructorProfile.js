// eslint-disable-next-line
import React, { useEffect, useState } from 'react' 
import styled from 'styled-components'; // eslint-disable-next-line
import axiosAuth from '../utils/axiosWithAuth'; 

import InstructorClassCard from './InstructorClassCard';
import ClassForm from './ClassForm';

const initialWorkouts = [
  {
    id:123, // added id for dummy data
    name:"Billy's Bootcamp",
    type:"Boxing",
    time:"2pm", // use datetime input for instructor form?
    duration:"3 minutes",
    intensityLvl:"Medium",
    location:"Billy's Basement",
    attendees:"3",
    maxSize:"6"
  },
  {
    id: 321, // added id for dummy data
    name:"Gump's Cross Country",
    type:"Running",
    time:"3pm", // use datetime input for instructor form?
    duration:"1 Year",
    intensityLvl:"High",
    location:"Highway 61",
    attendees:"1",
    maxSize:"20"
  },
]

const initialFormValues = {
    name:"",
    type:"",
    time:"",
    duration:"",
    intensityLvl:"",
    location:"",
    attendees:"",
    maxSize:""
}

const StyledInstructorProfile = styled.div`
display:flex;
flex-flow:column nowrap;
background-color: gray;
align-items:center;

.classContainer {
  display:flex;
  flex-flow: row wrap;
  justify-content:space-between;
}

.classCard {
  display:flex;
  padding: 10px;
  margin: 20px;
  color: black;
  background: cornsilk;
}
`

const InstructorProfile = props => { // eslint-disable-next-line
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ workouts, setWorkouts ] = useState(initialWorkouts); // eslint-disable-next-line
  const [ userWorkouts, setUserWorkouts ] = useState(initialWorkouts)
  const [ isEditing, setIsEditing ] = useState(false);

  // Will render upcoming classes by id

  // useEffect(() => {
  //   axiosAuth()
  //   .get('instructors classes')
  //   .then(res => {
  //     setWorkouts(res.data) //set to dummy data
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // },[])

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const handleClassSubmit = event => {
    event.preventDefault();
  
  }

  return (
    <StyledInstructorProfile>
      {/* pull in loggedInUser name */}
      <h1>Welcome! _username_</h1>
      <h2>Click below to start a new class!</h2>
      {/* add Link and Route to button | match url/ user id /"new Event"? or w/e endpoint is called */}
      <button className="eventBtn">Create new Class!</button>
      <ClassForm 
        formValues={formValues}
        handleChange={handleChange}
        handleClassSubmit={handleClassSubmit}
      />
      <div className="classContainer">
      {
        workouts.map(workout => {
          return (
            <InstructorClassCard
            key={workout.id}
            className="classCard"
            workout={workout}
            />
          )
        })
      }
      </div>
    </StyledInstructorProfile>
  )
}

export default InstructorProfile;