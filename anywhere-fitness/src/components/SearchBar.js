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
  const { name, value } = event.target;
  
  console.log('change value')
  setSearchValue({
    ...searchValue,
    [name] :  value
  })
}

const handleSubmit = event => {
  event.preventDefault();
  searchFor();
}

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <select className="searchInput" name="dropValue" onChange={handleChange} value={searchValue.dropValue}>
        <option value=''>-----Select-----</option>
        <option value='time'>Class Time</option>
        <option value='duration'>Duration</option>
        <option value='intensityLvl'>Intensity</option>
        <option value='location'>Location</option>
      </select>
      <input
      type="text"
      className="searchInput"
      name="textValue"
      placeholder="Search..."
      onChange={handleChange}
      value={searchValue.textValue}
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
