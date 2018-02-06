import React from 'react';
import ChannelIndexContainer from '../channel/channel_index_container';
import { withRouter, Route } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelModalContainer from '../modal/channel_modal_container';
// import DirectMessageIndexContainer from
//   '../direct_message/direct_message_container';

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
        <button className="logout_button"
          onClick={ this.props.logout }>Log out</button>
      </div>
      <ChannelIndexContainer
        defaultChannel={this.props.currentUser.channelSubs[0]}/>
    </div>
    );
  }
}

// export default Sidebar;
export default withRouter(Sidebar);
