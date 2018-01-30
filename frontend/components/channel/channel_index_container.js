import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { withRouter } from 'react-router-dom';
import { createChannel, deleteChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  let channels = [];
  let directMessages = [];

  if(Object.values(state.channels).length > 0) {
    state.session.currentUser.channelSubs.forEach(channelId => {
      if (state.channels[channelId].is_dm) {
        directMessages.push(state.channels[channelId]);
      } else {
        channels.push(state.channels[channelId]);
      }
    });
  }

  return({
    channels: channels,
    directMessages: directMessages
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    deleteChannel: (channelId) => () => dispatch(deleteChannel(channelId))
  });
};

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(ChannelIndex));
