import React from 'react';
import ChannelIndexContainer from '../channel/channel_index_container';
import { withRouter, Route } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelModalContainer from '../modal/channel_modal_container';

class Sidebar extends React.Component {

  render () {
    let currentChannelTitle;
    if (!this.props.currentChannelTitle) {
      currentChannelTitle = "";
    } else {
      currentChannelTitle = this.props.currentChannelTitle;
    }

    return (
    <div>
      <div className="sidebar_header">
        #{this.props.currentChannelTitle}
      
        <div className="welcome_header">
          {this.props.currentUser.username}
        </div>
        <button className="logout_btn"
          onClick={ this.props.logout }>Log out</button>
      </div>

        <ChannelIndexContainer/>

    </div>
    );
  }
}

export default withRouter(Sidebar);
