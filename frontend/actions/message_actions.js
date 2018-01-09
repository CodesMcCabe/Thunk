export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
import * as MessageApiUtil from '../util/messages_util';

export const fetchMessages = () => dispatch => {
  return (
    MessageApiUtil.fetchMessages().then(messages => dispatch(
      receiveAllMessages(messages)))
  );
};

export const fetchMessage = (id) => dispatch => {
  return (
    MessageApiUtil.fetchMessage(id).then(message => dispatch(
      receiveMessage(message)))
  );
};

export const sendMessage = (message) => {
  return (
    MessageApiUtil.sendMessage(message).then(message => dispatch(
      receiveMessage(message)))
  );
};

const receiveAllMessages = (messages) => {
  return({
    type: RECEIVE_ALL_MESSAGES,
    messages
  });
};

export const receiveMessage = (message) => {
  return({
    type: RECEIVE_MESSAGE,
    message
  });
};
