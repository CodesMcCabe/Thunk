import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    currentChannelTitle: ownProps.currentChannelTitle
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
