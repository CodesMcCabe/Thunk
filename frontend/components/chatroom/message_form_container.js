import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../actions/chatroom_actions';

const mapStateToProps = (state) => {
  let message = {content: ""};

  return { message };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: message => dispatch(createMessage(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
