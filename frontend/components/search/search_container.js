import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state) => {
  return ({
    channels: Object.values(state.channels)
  });
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, null)(Search);
