import React from 'react';
import { connect } from 'react-redux';

import { newFilter } from '../reducers/filterReducer';

const AnecdoteFilter = ({ newFilter }) => {
  return (
    <div>
      filter <input onChange={(e) => newFilter(e.target.value)}/>
    </div>
  );
};

const mapDispatchToProps = {
  newFilter
};

const ConnectedAnecdoteFilter = connect(null, mapDispatchToProps)(AnecdoteFilter);
export default ConnectedAnecdoteFilter;