import React from 'react'

import AnecdoteForm from './AnecdoteForm';
import AnecdoteList from './AnecdoteList';
import Notification from './Notification';
import AnecdoteFilter from './AnecdoteFilter';

const App = () => (
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


export default App;