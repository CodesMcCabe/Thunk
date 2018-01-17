import React from 'react';
import { withRouter, NavLink, Redirect } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelModalContainer from '../modal/channel_modal_container';

// ADD MODAL FOR CHANNELS
// SEARCH FOR ALL CHANNELS IN ORDER TO SUB
class ChannelIndex extends React.Component {

  deleteButton (channel) {
    if (channel.title === 'default') {
      return (
        <div></div>
      );
    } else {
      return (
        <button onClick={this.props.deleteChannel(channel.id)}
          className="delete_channel_button">
          <div className="cssCircle">
            <div className="circle_letter">x</div>
          </div>
        </button>
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
        <div className="channel_list">
          <ul>
            {this.props.channels.map(channel => {
              return (
                  <li id="focus_channel"
                    className="li_list_item" key={channel.id}>
                    <NavLink className="channel_list_item"
                      to={`/channels/${channel.id}`}>
                      <div className="channel_hash"># </div>
                      <div className="channel_title">{channel.title}</div>
                      {this.deleteButton(channel)}
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
