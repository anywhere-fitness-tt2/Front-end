// eslint-disable-next-line
import React, { useEffect, useState } from 'react' 
import styled from 'styled-components'; // eslint-disable-next-line
import { connect } from 'react-redux';
import { getClientClassById } from '../actions';
import { useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import ClientClassCard from './ClientClassCard';
import CustomizedSteppers from '../components/Onboarding';

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

  //turn onboarding On and Off.
  const [displayOnboard, setDisplayOnboard] = useState(true);
  const onboardSwitch = () => {
    setDisplayOnboard(!displayOnboard)
  };

  const { id } = useParams();

  useEffect(() => {
    props.getClientClassById(id)
      setWorkouts(props.clientClasses)
  //eslint-disable-next-line
  },[]);

  
  return (
    <>
      <StyledClientProfile>
        <h1>Welcome! {props.user.username}</h1>
        <button onClick={onboardSwitch} style={{
          color:'#FAED26',
          backgroundColor:'#252629'
        }}>Turn Onboarding On</button>
        <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
              />
            )}))}
        </div>
      </StyledClientProfile>
      {displayOnboard && <CustomizedSteppers onboardSwitch={onboardSwitch} />}
    </>
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

export default connect(mapStateToProps, { getClientClassById })(ClientProfile);
