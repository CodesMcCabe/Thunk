import { connect } from 'react-redux';
import MessageForm from './message_form';
import { receiveMessage } from '../../actions/message_actions';
import { fetchChannel, subscribeChannel, receiveChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentMessage: '',
    currentUser: state.session.currentUser,
    currentChannel: ownProps.currentChannel,
    channels: state.channels
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message)),
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    subscribeChannel: (channelId) => dispatch(subscribeChannel(channelId)),
    receiveChannel: (channel) => dispatch(receiveChannel(channel))
  };
};

export default connect(mapStateToProps,
  mapDispatchToProps)(MessageForm);
