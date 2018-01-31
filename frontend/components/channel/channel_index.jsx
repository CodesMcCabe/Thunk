import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelModalContainer from '../modal/channel_modal_container';

// ADD MODAL FOR CHANNELS
// SEARCH FOR ALL CHANNELS IN ORDER TO SUB
class ChannelIndex extends React.Component {
  // deleteChannel(channel) {
  //   this.props.deleteChannel(channel.id);
  //   return (
  //     <Redirect to={`/channels/${this.props.currentUser.channelSubs[0]}`} />
  //   );
  // }

  deleteButton (channel) {
    if (channel.title === 'default') {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="channel_button_container">
          <button onClick={this.props.deleteChannel(channel.id)}
            className="delete_channel_button">
              x
          </button>
        </div>
      );
    }
  }

  focusDefaultChannel() {
    // let margin = document.getElementById('focus_channel');
    // if (margin.className === 'session_box') {
    //   margin.className = 'session_box_with_errors';
    // }
  }

  render () {
    return (
      <div className="sidebar_list">
        <div className="channel_header">
          <div className="ch_header_top">Channels</div>
          <ChannelModalContainer />
        </div>
        <div className="channels">
          <ul className="channel_list">
            {this.props.channels.map(channel => {
              return (
                  <li key={channel.id} id="focus_channel"
                    className="li_list_item" >
                    <NavLink className="channel_list_item"
                      to={`/channels/${channel.id}`}>
                      <div className="channel_hash"># </div>
                      <div className="channel_title">{channel.title}</div>
                      <div className="channel_header_inner">
                        {this.deleteButton(channel)}
                      </div>
                    </NavLink>
                  </li>
              );
            })}
          </ul>
        </div>
        <div className="channel_header">
          <div className="ch_header_top">Direct Messages</div>
        </div>
        <div className="channels">
          <ul className="channel_list">
            {this.props.directMessages.map(directMessage => {
              return (
                  <li id="focus_channel"
                    className="li_list_item" key={directMessage.id}>
                    <NavLink className="channel_list_item"
                      to={`/channels/${directMessage.id}`}>
                      <div className="channel_hash"># </div>
                      <div className="channel_title">{directMessage.title}</div>
                      <div className="channel_header_inner">
                        {this.deleteButton(directMessage)}
                      </div>
                    </NavLink>
                  </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
