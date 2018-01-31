import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';


const initialState = {
  currentUser: null
};

const sessionReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  let user;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {currentUser: action.currentUser});
    case RECEIVE_CHANNEL:
      user = oldState.currentUser;
      user.channelSubs.push(action.channel.id);
      return Object.assign({}, oldState, {currentUser: user});
    case REMOVE_CHANNEL:
      user = oldState.currentUser;
      const index = user.channelSubs.indexOf(action.channelId);
      user.channelSubs.splice(index, 1);
      return Object.assign({}, oldState, {currentUser: user});
    case RECEIVE_MESSAGE:
      user = oldState.currentUser;
      if (!user.channelSubs.includes(action.message.channel_id)) {
        user.channelSubs.push(action.message.channel_id);
        return Object.assign({}, oldState, {currentUser: user});
      }
    default:
      return oldState;
  }
};

export default sessionReducer;
