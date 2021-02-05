// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'; // eslint-disable-next-line
import { connect } from 'react-redux';
import { getClientClassById, signupClass, quitClass, searchForClass } from '../actions';
import { useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import ClientClassCard from './ClientClassCard';
import SearchCard from './SearchCard';

const StyledClientProfile = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: url('https://i.imgur.com/8FndkHz.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 88vh;

  h1 {
    background-color: ${(props) => props.theme.midGray};
    font-family: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.yellow};
    font-size: 3rem;
    padding: 2% 4%;
  }

  h2 {
    background-color: ${(props) => props.theme.midGray};
    font-family: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.yellow};
    font-size: 2.5rem;
    padding: 2% 3%;
  }


.searchContainer {
  background-color: ${(props) => props.theme.midGray};
  padding: 10px 20px;
  border: 2px #FAED26 solid;
}

.classContainer {
  display:flex;
  flex-flow: row wrap;
  justify-content:center;
  min-width: 80%;
  margin:auto;
}

.classCard {
  display:flex;
  flex-flow: column nowrap;
  text-align:center;
  color: whitesmoke;
  background:${(props) => props.theme.midGray};
  font-family: ${(props) => props.theme.bodyFont};
  margin:10px;
  min-width: 400px;

  h2 {
    padding:0px 15px;

  }

  .classContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    min-width: 80%;
    margin: auto;
  }

  .classCard {
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    color: whitesmoke;
    background: ${(props) => props.theme.midGray};
    font-family: ${(props) => props.theme.bodyFont};
    border: #faed26 2px solid;

    h2 {
      padding: 0px 15px;
      text-decoration: underline;
    }

    .label {
      margin: 3px;
      margin-bottom: -8px;
      color: ${(props) => props.theme.yellow};
      letter-spacing: 2px;
      font-size: 1.3rem;
    }

    button {
      background: ${(props) => props.theme.midGray};
      border: #faed26 2px solid;
      color: whitesmoke;
      padding: 5px;
      margin-bottom: 5px;

      &:hover {
        color: ${(props) => props.theme.midGray};
        background: ${(props) => props.theme.yellow};
      }
    }
  }
}

.searchHeader {
    text-align:center;
  }

.searchCardContainer {
  display:flex;
  flex-flow:row wrap;
  justify-content:space-around;
  align-items:stretch;
  align-content:center;
}
`

const initialSearchValues = {
  dropValue:"", textValue:""
}

const ClientProfile = props => { // eslint-disable-next-line
  const [ workouts, setWorkouts ] = useState([]);
  const [ searchValue, setSearchValue ] = useState(initialSearchValues);

  //turn onboarding On and Off.


  const { id } = useParams();
  useEffect(() => {
    props.getClientClassById(id);
    setWorkouts(props.clientClasses);
    //eslint-disable-next-line
  }, []);

  const searchFor = () => {

    props.searchForClass(searchValue);
    setSearchValue(initialSearchValues);

  };

  const leaveClass = (id) => {
    props.quitClass(id);
  };

  
  const signUp = classId => {
    props.signupClass(classId);
  }


  return (
    <StyledClientProfile>
      <h1>Welcome! {props.user.username}</h1>
      <div className='searchContainer'>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFor={searchFor}
          />
        </div>
        {
          props.classes.length === 0 ? null : (
          <section className="searchResults">
          <h2 className="searchHeader">Search Results</h2>
            <div className="searchCardContainer">
                {
                props.classes.map( workout => {
                  return (
                    <SearchCard
                      key={workout.classId}
                      workout={workout}
                      signUp={signUp}
                      />
                    )})}
            </div>
          </section>
        )}
      <h2>Upcoming Workouts</h2>
        <div className="classContainer">
          {props.isLoading && !undefined ? <h2>Loading Classes...</h2> : (
          workouts.map(workout => {
            return (
              <ClientClassCard
              key={workout.classId}
              workout={workout}
              leaveClass={leaveClass}

              />
            );
          })
        )}
      </div>
    </StyledClientProfile>
  );
};

const mapStateToProps = (state) => {
  return {

  user: state.loginReducer.user,
  loggingIn: state.loginReducer.logginIn,
  isLoading: state.clientReducer.isLoading,
  clientClasses: state.clientReducer.clientClasses,
  error:state.clientReducer.error,
  classes:state.searchReducer.classes
  } 
}

export default connect(mapStateToProps, { getClientClassById, signupClass, quitClass, searchForClass })(ClientProfile);
