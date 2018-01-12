import { connect } from 'react-redux';
import ChannelModal from './channel_modal';
import { createChannel, subscribeChannel } from '../../actions/channel_actions';

const mapStateToProps = (state) => {
   return({
     admin_id: state.session.currentUser.id,
     channels: Object.values(state.channels),
     currentUser: state.session.currentUser
   });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createChannel: (channel) => dispatch(createChannel(channel)),
    subscribeChannel: (payload) => () => dispatch(subscribeChannel(payload)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelModal);
