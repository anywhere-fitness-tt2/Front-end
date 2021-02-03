// eslint-disable-next-line
import React, { useEffect, useState } from 'react' 
import styled from 'styled-components'; // eslint-disable-next-line
import { connect } from 'react-redux';
import { getClientClassById } from '../actions';
import { useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import ClientClassCard from './ClientClassCard';

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

const ClientProfile = props => { // eslint-disable-next-line
  const [ workouts, setWorkouts ] = useState(initialWorkouts);
  const [ searchValue, setSearchValue ] = useState("");

  const { id } = useParams();

  useEffect(() => {
    props.getClientClassById(id) //eslint-disable-next-line
  },[]);

  return (
    <StyledClientProfile>
      {/* pull in loggedInUser name */}
      <h1>Welcome! {props.user.username}</h1>
      <SearchBar
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <div className="classContainer">
      {
        workouts.map(workout => {
          return (
            <ClientClassCard
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

const mapStateToProps = state => {
  return {
  user: state.loginReducer.user,
  loggingIn: state.loginReducer.logginIn,
  clientClasses: state.loginReducer.clientClasses
  } 
}

export default connect(mapStateToProps, { getClientClassById })(ClientProfile);
