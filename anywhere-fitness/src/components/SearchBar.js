import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const StyledSearchBar = styled.form`
font-family: ${(props) => props.theme.bodyFont};
border: #FAED26 1px solid;
margin: 0px 25px;

.searchInput {
  text-align:center;
  padding: 5px 10px;
  color:${(props) => props.theme.midGray};
  font-size: 1rem;
}

.searchBtn {
  
  background:${(props) => props.theme.midGray};
  border-left: #FAED26 2px solid;
  color: whitesmoke;
  padding: 5px;

  &:hover {
    color: ${(props) => props.theme.midGray};
    background:${(props) => props.theme.yellow};
  }
}
`
const SearchBar = props => {
const { searchValue, setSearchValue, searchFor } = props;

const handleChange = event => {
  const { value } = event.target;
  setSearchValue(value)
}

const handleSubmit = event => {
  event.preventDefault();
  searchFor();
}

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <input
      type="text"
      className="searchInput"
      name="searchInput"
      placeholder="Search for Workouts..."
      onChange={handleChange}
      value={searchValue}
      />
      <button className="searchBtn">Search</button>
    </StyledSearchBar>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {})(SearchBar);
