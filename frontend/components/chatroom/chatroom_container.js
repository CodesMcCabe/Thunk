import { connect } from 'react-redux';
import Chatroom from 'chatroom';
// ACTIONS NOT CREATED
import { fetchChannelMessages,
  fetchSubbedUsers } from '../../actions/chatroom_actions';

// *** STATE DOES NOT INCLUDE THESE YET
const mapStateToProps = (state, ownProps) => {
  return({
    user_ids: state.users.subscriptions[ownProps.match.params.channelId]
    messages: state.messages,
    channelId: ownProps.match.params.channelId
  });
};
// ACTIONS NOT CREATED
const mapDispatchToProps = (dispatch) => {
  return({
    fetchChannelMessages: (channelId) => (dispatch(
      fetchChannelMessages(channelId))),

    fetchSubbedUsers: (channelId) => (dispatch(
      fetchSubbedUsers(channelId)
    ))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
