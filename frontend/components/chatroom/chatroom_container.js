import { connect } from 'react-redux';
import Chatroom from './chatroom';
// ACTIONS NOT CREATED
import { fetchMessages,
  fetchMessage, sendMessage } from '../../actions/message_actions';

// *** STATE DOES NOT INCLUDE THESE YET
const mapStateToProps = (state, ownProps) => {
  return({

    // user_ids: state.users.subscriptions[ownProps.match.params.channelId],
    messages: Object.values(state.messages)
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
    )
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
