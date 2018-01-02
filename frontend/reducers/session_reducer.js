import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const initialState = {
  currentUser: null
};

const sessionReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, action.currentUser);
    default:
      return oldState;
  }
};

export default sessionReducer;
