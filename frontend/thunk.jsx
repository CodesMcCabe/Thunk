import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';
import {fetchMessages, sendMessage} from './actions/message_actions';


window.fetchMessages = fetchMessages;
window.sendMessage = sendMessage;


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
