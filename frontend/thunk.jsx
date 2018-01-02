import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import {signup, login, logout} from './util/session_api_util';

window.signup = signup;
window.login = login;
window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<h1>Welcome to Thunk</h1>, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
