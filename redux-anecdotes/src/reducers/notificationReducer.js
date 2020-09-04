export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    const timerId = setTimeout(() => {
      dispatch(removeNotification());
    }, seconds * 500);
    dispatch(newNotification(message, timerId));
  }
};

const newNotification = (message, timerId) => {
  return {
    type: 'NEW_NOTIFICATION',
    data: {
      message,
      timerId
    }
  };
};

const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  };
};

const initialState = { message: null, timerId: null }

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      if (state.timerId) clearTimeout(state.timerId);
      return {message: action.data.message, timerId: action.data.timerId};
    case 'REMOVE_NOTIFICATION':
      return initialState;
    default:
      return state;
  }
};

export default notificationReducer;