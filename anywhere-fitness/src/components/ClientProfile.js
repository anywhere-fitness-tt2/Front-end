import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  getClientClassById,
  signupClass,
  quitClass,
  searchForClass,
} from '../actions';
import { useParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import ClientClassCard from './ClientClassCard';
import SearchCard from './SearchCard';

const StyledClientProfile = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-image: url(${(props) => props.theme.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 88vh;
  max-height: 88vh;
  overflow-y: scroll;
  overflow-x: hidden;

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
    font-size: 1.7rem;
    padding: 2% 3%;
  }

  .searchContainer {
    background-color: ${(props) => props.theme.midGray};
    padding: 10px 20px;
    width: 500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    font-family: ${(props) => props.theme.bodyFont};
    width: 400px;
    background-color: ${(props) => props.theme.midGray};
    margin: 20px;
    text-align: left;
    padding: 15px;

    span {
      color: ${(props) => props.theme.yellow};
    }

    h2 {
      color: ${(props) => props.theme.yellow};
      font-family: ${(props) => props.theme.titleFont};
    }

    .classContainer {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      text-align: center;
    }

    button {
      background: ${(props) => props.theme.midGray};
      border: #faed26 2px solid;
      color: whitesmoke;
      margin: 10px;
      padding: 5px;
      width: 80px;

      &:hover {
        color: ${(props) => props.theme.midGray};
        background: ${(props) => props.theme.yellow};
      }
    }
  }

  .searchHeader {
    text-align: center;
  }

  .searchCardContainer {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: center;
  }
  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #252629;
  }
`;

const initialSearchValues = {
  dropValue: '',
  textValue: '',
};

const ClientProfile = (props) => {
  const [searchValue, setSearchValue] = useState(initialSearchValues);

  const { id } = useParams();
  useEffect(() => {
    props.getClientClassById(id);
    //eslint-disable-next-line
  }, []);

  const searchFor = () => {
    props.searchForClass(searchValue);
    setSearchValue(initialSearchValues);
  };

  const leaveClass = (id) => {
    props.quitClass(id);
  };

  const signUp = (classId) => {
    props.signupClass(classId);
  };

  return (
    <StyledClientProfile>
      <h1>Welcome {props.user.username}</h1>
      <div className='searchContainer'>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchFor={searchFor}
        />
      </div>
      {props.classes.length === 0 ? null : (
        <section className='searchResults'>
          <h2 className='searchHeader'>Search Results</h2>
          <div className='searchCardContainer'>
            {props.classes.map((workout) => {
              return (
                <SearchCard
                  key={workout.classId}
                  workout={workout}
                  signUp={signUp}
                />
              );
            })}
          </div>
        </section>
      )}
      <h2>Upcoming Workouts</h2>
      <div className='classContainer'>
        {props.isLoading ? (
          <h2>Loading Classes...</h2>
        ) : (
          props.clientClasses.map((workout) => {
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
    error: state.clientReducer.error,
    classes: state.searchReducer.classes,
  };
};

export default connect(mapStateToProps, {
  getClientClassById,
  signupClass,
  quitClass,
  searchForClass,
})(ClientProfile);
