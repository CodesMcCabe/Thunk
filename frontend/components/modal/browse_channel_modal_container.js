// NOT YET IMPLEMENTED

import { connect } from 'react-redux';
import BrowseChannelModal from './browse_channel_modal';
import { subscribeChannel } from '../../actions/channel_actions';

const mapStateToProps = (state) => {
  return ({
    channels: state.channels
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    subscribeChannel: (payload) => dispatch(subscribeChannel(payload))
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)(BrowseChannelModal);
