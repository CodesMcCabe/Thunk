import React from 'react';
import ChannelIndexContainer from '../channel/channel_index_container';

class Sidebar extends React.Component {

  render () {
    return (
    <div>
      <p className="welcome_header">{this.props.currentUser.username}</p>
      <button className="logout_btn"
        onClick={ this.props.logout }>Log out</button>
      <div className="sidebar_scroll">
        {<ChannelIndexContainer />}
      </div>
    </div>
    );
  }
}

export default Sidebar;
