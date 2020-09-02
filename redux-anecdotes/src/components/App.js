import React from 'react'

import AnecdoteForm from './AnecdoteForm';
import AnecdoteList from './AnecdoteList';


const App = () => (
  <div>
    <h2>Anecdotes</h2>
    <AnecdoteList />
    <h2>create new</h2>
    <AnecdoteForm />
  </div>
);


export default App;