import React, { useEffect, useState } from 'react' 
import styled from 'styled-components'; 
import axiosAuth from '../utils/axiosWithAuth'; 

import SearchBar from './SearchBar';
import ClassCard from './ClassCard';

const initialWorkouts = [
  {
    id:123, // added id for dummy data
    name:"Billy's Bootcamp",
    type:"Boxing",
    start:"2pm", // use datetime input for instructor form?
    duration:"3 minutes",
    intensity:"Medium",
    location:"Billy's Basement",
    registered:"3",
    maxClassSize:"6"
  },
  {
    id: 321, // added id for dummy data
    name:"Gump's Cross Country",
    type:"Running",
    start:"3pm", // use datetime input for instructor form?
    duration:"1 Year",
    intensity:"High",
    location:"Highway 61",
    registered:"1",
    maxClassSize:"20"
  },
]

const StyledClientProfile = styled.div`
display:flex;
flex-flow:column nowrap;
background-color:grey;
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
  color: cornsilk;
  background:green;
}
`

const ClientProfile = props => {
  const [ workouts, setWorkouts ] = useState(initialWorkouts);
  const [ searchValue, setSearchValue ] = useState("");

  // Will render registered classes by client id

  // useEffect(() => {
  //   axiosAuth()
  //   .get('stuff')
  //   .then(res => {
  //     setWorkouts(res.data) //set to dummy data
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // },[])

  return (
    <StyledClientProfile>
      {/* pull in loggedInUser name */}
      <h1>Welcome! _username_</h1>
      <SearchBar
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <div className="classContainer">
      {
        workouts.map(workout => {
          return (
            <ClassCard
            key={workout.id}
            className="classCard"
            workout={workout}
            />
          )
        })
      }
      </div>
    </StyledClientProfile>
  )
}

export default ClientProfile
