import { RECEIVE_ALL_CHANNELS, RECEIVE_CHANNEL,
  REMOVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MESSAGE } from '../actions/message_actions';
import { merge } from 'lodash';

const channelReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return Object.assign({}, oldState, action.channels);
    case RECEIVE_CHANNEL:
      return Object.assign({}, oldState,
        {[action.channel.id]: action.channel});
    case RECEIVE_MESSAGE:
      const channel = merge({}, oldState[action.message.channel_id]);
      channel.messageIds.unshift(action.message.id);
      return Object.assign({}, oldState, {[channel.id]: channel});
    case REMOVE_CHANNEL:
      let newState = Object.assign({}, oldState);
      delete newState[action.channelId];
      return newState;
    default:
      return oldState;
  }
};

export default channelReducer;
