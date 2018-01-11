import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

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
    default:
      return oldState;
  }
};

export default userReducer;
