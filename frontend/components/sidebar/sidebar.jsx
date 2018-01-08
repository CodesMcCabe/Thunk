import React from 'react';

class Sidebar extends React.Component {

  render () {
    return (
    <div>
      <p className="welcome_header">{this.props.currentUser.username}</p>
      <button className="logout_btn"
        onClick={ this.props.logout }>Log out</button>
    </div>
    );
  }
}

export default Sidebar;
