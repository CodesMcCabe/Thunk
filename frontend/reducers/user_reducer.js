import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const userReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign({}, oldState, action.users);  
    default:
      return oldState;
  }
};

export default userReducer;
