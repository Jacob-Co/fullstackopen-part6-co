const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  };
} ;

export const newAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE',
    data: asObject(anecdote)
  };
};

export const initializeAnecdote = (data) => {
  return {
    type: 'INIT_ANECDOTE',
    data
  };
};

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      return state.map(anecdote => {
        if (anecdote.id === action.data.id) return { ...anecdote, votes: anecdote.votes + 1};
        return anecdote;
      });
    case 'NEW_ANECDOTE':
      return [ ...state, action.data ];
    case 'INIT_ANECDOTE':
      return action.data;
    default:
      return state;
  }
}

export default anecdoteReducer