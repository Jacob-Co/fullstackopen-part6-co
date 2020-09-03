import anecdoteService from '../services/anecdotes';

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: {
      id
    }
  };
} ;

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    return dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    });
  }
};

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    return dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })
  }
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