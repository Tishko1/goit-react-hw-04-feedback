import PropTypes from 'prop-types';
import { MsgNotification } from './Notification.styled';

export const Notification = ({ message }) => {
  return <MsgNotification>{message}</MsgNotification>;
};

Notification.protoType = {
  message: PropTypes.string,
};
