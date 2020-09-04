import React from 'react';
import { connect } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

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

const AnecdoteList = ({ anecdotes, voteAnecdote, setNotification }) => {
  return (
    <>
    {anecdotes.map(anecdote =>
        <Anecdote 
          key={anecdote.id}
          content={anecdote.content}
          votes={anecdote.votes}
          handleClick={() => {
            voteAnecdote(anecdote.id)
            setNotification(`you voted for '${anecdote.content}'`, 5)
          }}
        />
      )}
    </>
  )
};

const mapStateToProps = ({ anecdotes, filter }) => {
  return {anecdotes: anecdotes
    .filter(anecdotes => anecdotes.content.includes(filter))
    .sort((an1, an2) => an2.votes - an1.votes)}
};

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
};

// export default AnecdoteList;
const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList);
export default ConnectedAnecdoteList;