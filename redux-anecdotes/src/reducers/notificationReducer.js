export const setNotification = (message, seconds) => {
  return async (dispatch) => {
    dispatch(newNotification(message));
    setTimeout(() => {
      dispatch(removeNotificationWithMessage(message));
    }, seconds * 1000);
  }
};

const newNotification = (message) => {
  return {
    type: 'NEW_NOTIFICATION',
    message
  };
};

const removeNotificationWithMessage = (message) => {
  return {
    type: 'REMOVE_NOTIFICATION',
    message
  };
};

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.message;
    case 'REMOVE_NOTIFICATION':
      return action.message === state
        ? ''
        : state
    default:
      return state;
  }
};

export default notificationReducer;