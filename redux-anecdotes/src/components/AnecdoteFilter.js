import React from 'react';
import { useDispatch } from 'react-redux';

import { newFilter } from '../reducers/filterReducer';

const AnecdoteFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      filter <input onChange={(e) => dispatch(newFilter(e.target.value))}/>
    </div>
  );
};

export default AnecdoteFilter;