import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { fetchMessages,
  fetchMessage, sendMessage } from '../../actions/message_actions';
import { fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    users: Object.values(state.users),
    // user_ids: state.users.subscriptio}ns[ownProps.match.params.channelId],
    messages: Object.values(state.messages),
    currentUser: state.session.currentUser
    // channelId: ownProps.match.params.channelId
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUsers: () => dispatch(
      fetchUsers()
    ),

    fetchMessages: () => dispatch(
      fetchMessages()
    ),

    fetchMessage: (id) => dispatch(
      fetchMessage(id)
    ),

    sendMessage: (msg) => dispatch(
      sendMessage(msg)
    ),

    logout: () => dispatch(
      logout()
    )
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
