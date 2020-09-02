export const newNotification = (message) => {
  return {
    type: 'NEW_NOTIFICATION',
    message
  };
};

export const removeNotificationWithMessage = (message) => {
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