import * as DirectMessageApiUtil from '../util/direct_messages_api_util';

export const RECEIVE_ALL_DMS = 'RECEIVE_ALL_DMS';
export const RECEIVE_DM = 'RECEIVE_DM';
export const REMOVE_DM = 'REMOVE_DM';

export const fetchDirectMessages = () => dispatch => {
  DirectMessageApiUtil.fetchDirectMessages().then(directMessages =>
    dispatch(receiveAllDMs(directMessages)));
};

export const createDirectMessage = (directMessage) => dispatch => {
  DirectMessageApiUtil.createDirectMessage(directMessage).then(
    directMessage => dispatch(receiveDM(directMessage))
  );
};

export const deleteDirectMessage = (directMessageId) => dispatch => {
  DirectMessageApiUtil.deleteDirectMessage(directMessageId).then(
    () => dispatch(removeDM(directMessageId))
  );
};

export const updateDirectMessage = (payload) => dispatch => {
  DirectMessageApiUtil.updateDirectMessage(payload).then(
    directMessage => dispatch(receiveDM(directMessage))
  );
};

const receiveAllDMs = (directMessages) => {
  return({
    type: RECEIVE_ALL_DMS.
    directMessages
  });
};

const receiveDM = (directMessage) => {
  return({
    type: RECEIVE_DM,
    directMessage
  });
};

const removeDM = (directMessageId) => {
  return({
    type: REMOVE_DM,
    directMessageId
  });
};
