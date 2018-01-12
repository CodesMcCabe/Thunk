import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash';

const userReducer = (oldState = {}, action) => {
  let user;

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
      user = oldState[action.channel.admin_id];
      user.channelSubs.push(action.channel.id);
      return Object.assign({}, oldState, {[user.id]: user});
      // WILL HAVE TO UPDATE FOR ALL USERS WHEN AVAILABLE
    // case REMOVE_CHANNEL:
    //   let newState = Object.assign({}, oldState);
    //   let users = Object.values(oldState);
    // //   // let subs;
    // //   // // set new object with STATE
    // //   // // iterate through the users and check for the channelId
    // //   // // delete the channel and put
    //   users.forEach(user => {
    //     const index = user.channelSubs.indexOf(action.channelId);
    //     if (index > -1) { user.channelSubs.splice(index, 1); }
    //     newState.user.id.channelSubs = user.channe
    //   });
    // //   //
    //   return Object.assign({}, oldState, {});
    default:
      return oldState;
  }
};

export default userReducer;
