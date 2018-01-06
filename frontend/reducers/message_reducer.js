import { RECEIVE_ALL_MESSAGES,
         RECEIVE_MESSAGE } from '../actions/message_actions';

const messageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return Object.assign({}, oldState, action.messages);
    case RECEIVE_MESSAGE:
        return Object.assign({}, oldState,
          {[action.message.id]: action.message});
    default:
      return oldState;
  }
};

export default messageReducer;
