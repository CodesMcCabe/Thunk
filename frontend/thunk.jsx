import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  const preloadedState = { defaultChannel: window.defaultChannel,
    session: {} };

  let store;
  if (window.currentUser) {
    preloadedState['session']['currentUser'] = window.currentUser;
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore(preloadedState);
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
