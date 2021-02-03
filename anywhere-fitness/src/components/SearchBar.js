import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const StyledSearchBar = styled.form`

#searchBar {
  text-align:center;
  border-radius: 10px;
}

.search {
  border-radius: 10px;
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
      id="searchBar"
      name="searchBar"
      placeholder="Search for Workouts..."
      onChange={handleChange}
      value={searchValue}
      />
      <button className="search">Search</button>
    </StyledSearchBar>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, {})(SearchBar);
