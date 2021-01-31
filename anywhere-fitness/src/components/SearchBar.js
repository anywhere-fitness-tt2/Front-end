import React, { useState } from 'react';
import styled from 'styled-components';


const StyledSearchBar = styled.form`

`

const SearchBar = props => {
const [ searchValue, setSearchValue ] = useState("")



const handleChange = event => {
  const { value } = event.target;
  setSearchValue(value)
}

const handleSubmit = () => {
  // query for search input
  // use dropdown menu to set search type?
}
  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <input
      type="text"
      id="searchBar"
      name="searchBar"
      placeholder="Search for Workouts Anywhere..."
      onChange={handleChange}
      value={searchValue}
      />
      <button>asdf</button>
    </StyledSearchBar>
  )
}

export default SearchBar
