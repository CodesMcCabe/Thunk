import { connect } from 'react-redux';
import MessageForm from './message_form';
import { receiveMessage } from '../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentMessage: '',
    currentUser: state.session.currentUser,
    currentChannel: ownProps.currentChannel,
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message))
  };
};

export default connect(mapStateToProps,
  mapDispatchToProps)(MessageForm);
