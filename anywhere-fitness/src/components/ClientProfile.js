// eslint-disable-next-line
import React, { useEffect, useState } from 'react' 
import styled from 'styled-components'; // eslint-disable-next-line
import { connect } from 'react-redux';
import { getClientClassById, signupClass } from '../actions';
import { useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import ClientClassCard from './ClientClassCard';

// const initialWorkouts = [
//   {
//     id:123, // added id for dummy data
//     name:"Billy's Bootcamp",
//     type:"Boxing",
//     time:"2pm", // use datetime input for instructor form?
//     duration:"3 minutes",
//     intensityLvl:"Medium",
//     location:"Billy's Basement",
//     attendees:"3",
//     maxSize:"6"
//   },
//   {
//     id: 321, // added id for dummy data
//     name:"Gump's Cross Country",
//     type:"Running",
//     time:"3pm", // use datetime input for instructor form?
//     duration:"1 Year",
//     intensityLvl:"High",
//     location:"Highway 61",
//     attendees:"1",
//     maxSize:"20"
//   },
// ]

const StyledClientProfile = styled.div`
display:flex;
flex-flow:column nowrap;
background-color:grey;
align-items:center;
height: 100vh;

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
  const [ workouts, setWorkouts ] = useState([]);
  const [ searchValue, setSearchValue ] = useState("");

  const { id } = useParams();

  useEffect(() => {
    props.getClientClassById(id)
      setWorkouts(props.clientClasses)
  //eslint-disable-next-line
  },[]);

  const searchFor = () => {
    console.log(searchValue);
    setSearchValue("");

  }

  const leaveClass = () => {
    console.log('click, leaving class')
  }
  
  const signUp = () => {
    console.log('signed up!')
    signupClass();
  }

  return (
    <StyledClientProfile>
      <h1>Welcome! {props.user.username}</h1>
      <SearchBar
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchFor={searchFor}
      />
    <h2>Upcoming Workouts!</h2>
      <div className="classContainer">
      { props.isLoading ? <h2>Loading Classes...</h2> : (
        workouts.map(workout => {
          return (
            <ClientClassCard
            key={workout.id}
            className="classCard"
            workout={workout}
            leaveClass={leaveClass}
            signUp={signUp}
            />
          )}))}
      </div>
    </StyledClientProfile>
  )
}

const mapStateToProps = state => {
  return {
  user: state.loginReducer.user,
  loggingIn: state.loginReducer.logginIn,
  isLoading: state.clientReducer.isLoading,
  clientClasses: state.clientReducer.clientClasses,
  error:state.clientReducer.error
  } 
}

export default connect(mapStateToProps, { getClientClassById, signupClass })(ClientProfile);
