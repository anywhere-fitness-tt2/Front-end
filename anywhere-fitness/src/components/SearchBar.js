import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
  font-family: ${(props) => props.theme.bodyFont};
  margin: 0px 25px;

  .searchInput {
    text-align: center;
    color: whitesmoke;
    font-size: 1rem;
    height: 27px;
    margin-right: 20px;
    background-color: ${(props) => props.theme.lightGray};

    ::placeholder {
      color: whitesmoke;
    }
  }

  .dropdown {
    text-align: center;
    color: whitesmoke;
    font-size: 1rem;
    margin-right: 20px;
    height: 31px;
    background-color: ${(props) => props.theme.lightGray};

    ::placeholder {
      color: whitesmoke;
    }
  }

  .searchBtn {
    background: ${(props) => props.theme.midGray};
    border: 1px solid ${(props) => props.theme.yellow};
    color: whitesmoke;
    padding: 5px;
    width: 80px;
    height: 30px;

    &:hover {
      color: ${(props) => props.theme.midGray};
      background: ${(props) => props.theme.yellow};
    }
  }
`;
const SearchBar = (props) => {
  const { searchValue, setSearchValue, searchFor } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchValue({
      ...searchValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchFor();
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <select
        className='dropdown'
        name='dropValue'
        onChange={handleChange}
        value={searchValue.dropValue}
      >
        <option value=''>-----Select-----</option>
        <option value='type'>Type</option>
        <option value='duration'>Duration</option>
        <option value='username'>Instructor</option>
        <option value='intensityLvl'>Intensity</option>
        <option value='location'>Location</option>
      </select>
      <input
        type='text'
        className='searchInput'
        name='textValue'
        placeholder='Search...'
        onChange={handleChange}
        value={searchValue.textValue}
      />
      <button className='searchBtn'>Search</button>
    </StyledSearchBar>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {})(SearchBar);
