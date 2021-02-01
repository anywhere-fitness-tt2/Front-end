// eslint-disable-next-line
import React, { useEffect, useState } from 'react' 
import styled from 'styled-components'; // eslint-disable-next-line
import axiosAuth from '../utils/axiosWithAuth'; 

import InstructorClassCard from './InstructorClassCard';

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

const StyledInstructorProfile = styled.div`
display:flex;
flex-flow:column nowrap;
background-color: blue;
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
  color: red;
  background:green;
}
`

const InstructorProfile = props => { // eslint-disable-next-line
  const [ workouts, setWorkouts ] = useState(initialWorkouts); // eslint-disable-next-line
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

  return (
    <StyledInstructorProfile>
      {/* pull in loggedInUser name */}
      <h1>Welcome! _username_</h1>
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