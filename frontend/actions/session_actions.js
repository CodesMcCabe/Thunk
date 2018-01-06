export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
import * as SessionApiUtil from '../util/session_api_util';

export const login = (user) => dispatch => {
  return(
    SessionApiUtil.login(user).then(currentUser => {
      dispatch(receiveCurrentUser(currentUser));
    }, err => {
      dispatch(receiveErrors(err.responseJSON));
    }
  ));
};

export const logout = () => dispatch => {
  return(
    SessionApiUtil.logout().then(user =>
      dispatch(receiveCurrentUser(null)))
  );
};

export const signup = (user) => dispatch => {
  return(
    SessionApiUtil.signup(user).then(currentUser => {
      dispatch(receiveCurrentUser(currentUser));
    }, err => {
      dispatch(receiveErrors(err.responseJSON));
    }
  ));
};

const receiveCurrentUser = (currentUser) => {
  return({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

const receiveErrors = (errors) => {
  return({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};
