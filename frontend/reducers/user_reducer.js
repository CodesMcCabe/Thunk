import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

const userReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign({}, oldState, action.users);
    case RECEIVE_CURRENT_USER:
      if(!action.currentUser) {
        return {};
      } else {
        return oldState;
      }
    case RECEIVE_CHANNEL:
      const user = oldState[action.channel.admin_id];
      user.channelSubs.push(action.channel.id);
      return Object.assign({}, oldState, {[user.id]: user});
    default:
      return oldState;
  }
};

export default userReducer;
