export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
import * as UsersApiUtil from '../util/users_api_util';

const receiveAllUsers = (users) => {
  return({
    type: RECEIVE_ALL_USERS,
    users
  });
};

export const fetchUsers = () => dispatch => {
  return (
    UsersApiUtil.fetchUsers().then(users => 
      dispatch(receiveAllUsers(users)))
  );
};
