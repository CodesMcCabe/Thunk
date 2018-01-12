import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { fetchMessages } from '../../actions/message_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchChannels, subscribeChannel } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  // iterate over the message ids within the channel and pull those from
  // global state
  let messages = [];
  let currentChannelId;
  currentChannelId = ownProps.match.params.id;
  if (Object.values(state.channels).length > 0 &&
    state.channels[currentChannelId])  {
      messages = state.channels[currentChannelId].messageIds.map(messageId => {
        return (
          state.messages[messageId]
        );
      });
  }

  // REVERSE ON MESSAGES HERE!!
  return({
    users: state.users,
    // user_ids: state.users.subscriptio}ns[ownProps.match.params.channelId],
    messages: messages,
    currentUser: state.session.currentUser,
    channels: Object.values(state.channels),
    currentChannel: state.channels[currentChannelId]
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUsers: () => dispatch(
      fetchUsers()
    ),

    fetchChannels: () => dispatch(
      fetchChannels()
    ),

    fetchMessages: () => dispatch(
      fetchMessages()
    ),

    logout: () => dispatch(
      logout()
    ),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
