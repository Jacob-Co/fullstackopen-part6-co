import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { newNotification } from '../reducers/notificationReducer';

const Anecdote = ({content, votes, handleClick}) => (
  <div>
    <div>
      {content}
    </div>
    <div>
      has {votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
);

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
      return state.anecdotes
        .filter(anecdote => anecdote.content.includes(state.filter))
  });
  const dispatch = useDispatch();

  return (
    <>
      {anecdotes.sort((anec1, anec2) => anec2.votes - anec1.votes).map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          handleClick={() => {
            dispatch(voteAnecdote(anecdote.id))
            dispatch(newNotification(`you voted for '${anecdote.content}'`))
          }}
        />
      )}
    </>
  )
};

export default AnecdoteList;