import React, { useState } from 'react';
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
      placeholder="Search for Workouts..."
      onChange={handleChange}
      value={searchValue}
      />
      <button className="search">asdf</button>
    </StyledSearchBar>
  )
}

export default SearchBar
