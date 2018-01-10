import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import messageReducer from './message_reducer';
import userReducer from './user_reducer';
import channelReducer from './channel_reducer';
import defaultChannelReducer from './default_channel_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  messages: messageReducer,
  users: userReducer,
  channels: channelReducer,
  defaultChannel: defaultChannelReducer 
});

export default rootReducer;
