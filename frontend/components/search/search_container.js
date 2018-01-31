import { connect } from 'react-redux';
import Search from './search';
import { createChannel } from '../../actions/channel_actions';

const mapStateToProps = (state) => {
  return ({
    channels: Object.values(state.channels),
    users: Object.values(state.users),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    createChannel: (channel) => dispatch(createChannel(channel))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
