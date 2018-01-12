import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelModalContainer from '../modal/channel_modal_container';
// //
// ADD MODAL FOR CHANNELS
// SEARCH FOR ALL CHANNELS IN ORDER TO SUB
class ChannelIndex extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete () {}

  render () {
    return (
      <div className="sidebar_list">
        <div className="channel_header">
          Channels
          <ChannelModalContainer />
        </div>
        <div className="channel_list">
          <ul>
            {this.props.channels.map(channel => {
              return (
                <li className="li_list_item" key={channel.id}>
                  <NavLink className="channel_list_item"
                    to={`/channels/${channel.id}`}>
                    <div className="channel_hash"># </div>
                    <div className="channel_title">{channel.title}</div>
                    <button
                      className="delete_channel_button">
                      <div className="cssCircle">
                        <text className="circle_letter">x</text>
                      </div>
                    </button>
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
