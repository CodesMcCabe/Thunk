import { connect } from 'react-redux';
import ChannelModal from './channel_modal';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state) => {
   return({
     admin_id: state.session.currentUser.id
   });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createChannel: (channel) => dispatch(createChannel(channel))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelModal);
