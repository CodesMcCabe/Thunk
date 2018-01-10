import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { fetchMessages,
  fetchMessage, sendMessage } from '../../actions/message_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchChannels } from '../../actions/channel_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    users: Object.values(state.users),
    // user_ids: state.users.subscriptio}ns[ownProps.match.params.channelId],
    messages: Object.values(state.messages),
    currentUser: state.session.currentUser,
    channels: Object.values(state.channels)
    // channelId: ownProps.match.params.channelId
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
    )
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
