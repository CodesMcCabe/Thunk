import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';


const initialState = {
  currentUser: null
};

const sessionReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {currentUser: action.currentUser});
    case RECEIVE_CHANNEL:
      const user = oldState.currentUser;
      user.channelSubs.push(action.channel.id);
      return Object.assign({}, oldState, {currentUser: user});
    default:
      return oldState;
  }
};

export default sessionReducer;
