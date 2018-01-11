import { RECEIVE_ALL_MESSAGES,
         RECEIVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const messageReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return Object.assign({}, oldState, action.messages);
    case RECEIVE_MESSAGE:
        return Object.assign({}, oldState,
          {[action.message.id]: action.message});
    case RECEIVE_CURRENT_USER:
      if(!action.currentUser) {
        return {};
      } else {
        return oldState;
      }
    default:
      return oldState;
  }
};

export default messageReducer;
