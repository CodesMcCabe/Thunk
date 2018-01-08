import { connect } from 'react-redux';
import { login, signup, removeErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    removeErrors: () => dispatch(removeErrors()),
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
    formType
  };
};

export default connect(mapStateToProps,
  mapDispatchToProps)(SessionForm);
