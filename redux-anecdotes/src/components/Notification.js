import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { removeNotificationWithMessage } from '../reducers/notificationReducer';

const Notification = () => {
  const notification = useSelector(state => state.notification);
  const dispatch = useDispatch();

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: notification ? '' : 'none'
  }

  if (notification) setTimeout(() => dispatch(removeNotificationWithMessage(notification)), 5000);

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification;