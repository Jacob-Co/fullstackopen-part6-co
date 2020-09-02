export const newNotification = (message) => {
  return {
    type: 'NEW_NOTIFICATION',
    message
  };
};

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
    message: ''
  };
};

const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.message;
    case 'REMOVE_NOTIFICATION':
      return action.message;
    default:
      return state;
  }
};

export default notificationReducer;