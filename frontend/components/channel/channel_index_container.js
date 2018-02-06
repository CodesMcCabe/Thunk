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
    directMessages: directMessages,
    currentUser: state.session.currentUser,
    users: state.users
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    deleteChannel: (channelId) => () => dispatch(deleteChannel(channelId)
      ).then(() => {
        ownProps.history.push(`${ownProps.defaultChannel}`);
      })
  });
};

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(ChannelIndex));
