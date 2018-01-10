import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {
  // pull channels that have an id that is within the channelSubs array
  return({
    channels: Object.values(state.channels)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel))
  });
};

export default withRouter(connect(mapStateToProps,
  null)(ChannelIndex));
