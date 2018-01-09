import { connect } from 'react-redux';
import Chatroom from './chatroom';
import { fetchMessages,
  fetchMessage, sendMessage } from '../../actions/message_actions';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({

    // user_ids: state.users.subscriptions[ownProps.match.params.channelId],
    messages: Object.values(state.messages),
    currentUser: state.session.currentUser
    // channelId: ownProps.match.params.channelId
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchMessages: () => (dispatch(
      fetchMessages())
    ),

    fetchMessage: (id) => (dispatch(
      fetchMessage(id))
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
