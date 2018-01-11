import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  let channels = [];

  if(Object.values(state.channels).length > 0) {
    channels = state.session.currentUser.channelSubs.map(channelId => {
      return (
        state.channels[channelId]
      );
    });

  }


  return({
    channels: channels
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel))
  });
};

export default withRouter(connect(mapStateToProps,
  null)(ChannelIndex));
