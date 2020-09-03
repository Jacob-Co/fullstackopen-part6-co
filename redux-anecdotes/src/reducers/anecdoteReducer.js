export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  };
} ;

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
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