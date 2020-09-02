export const newFilter = (filter) => {
  return {
    type: 'NEW_FILTER',
    filter
  };
};

const filterReducer = (state='', action) => {
  if (action.type === 'NEW_FILTER') return action.filter;
  return state;
}

export default filterReducer;