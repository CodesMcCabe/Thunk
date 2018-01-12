import { connect } from 'react-redux';
import BrowseChannelModal from './browse_channel_modal';
import { fetchChannels, subscribeChannel } from '../../actions/channel_actions';


const mapStateToProps = (state) => {
  return ({
    channels: Object.values(state.channels),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    subscribeChannel: (payload) => () => dispatch(subscribeChannel(payload)),
    fetchChannels: () => dispatch(fetchChannels())
  });
};

export default connect(mapStateToProps,
  mapDispatchToProps)(BrowseChannelModal);
