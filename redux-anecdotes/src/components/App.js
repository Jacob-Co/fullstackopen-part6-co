import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AnecdoteForm from './AnecdoteForm';
import AnecdoteList from './AnecdoteList';
import Notification from './Notification';
import AnecdoteFilter from './AnecdoteFilter';

import anecdoteService from '../services/anecdotes';
import { initializeAnecdote } from '../reducers/anecdoteReducer';

const App = () => {
  const disptach = useDispatch();

  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => disptach(initializeAnecdote(anecdotes)));
  }, [disptach]);

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteFilter />
      <br/>
      <AnecdoteList />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};


export default App;