import React from 'react'

import AnecdoteForm from './AnecdoteForm';
import AnecdoteList from './AnecdoteList';
import Notification from './Notification';

const App = () => (
  <div>
    <Notification />
    <h2>Anecdotes</h2>
    <AnecdoteList />
    <h2>create new</h2>
    <AnecdoteForm />
  </div>
);


export default App;