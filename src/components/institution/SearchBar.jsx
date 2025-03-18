import React from 'react';

import { useDispatch } from 'react-redux';

import { setSearchQuery } from '../../Redux/slices/StudentsSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = () => {
  const dispatch = useDispatch(setSearchQuery());

  return (
    <input
      type='text'
      className='form-control w-50'
      placeholder='Search student...'
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
    />
  );
};

export default SearchBar;
