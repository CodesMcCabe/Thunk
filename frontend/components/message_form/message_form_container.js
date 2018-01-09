import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../actions/chatroom_actions';

const mapStateToProps = (state) => {
  let message = {content: ""};

  return { message };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // create Message is being called in chatroom channel when speak is Called

    createMessage: message => dispatch(createMessage(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
