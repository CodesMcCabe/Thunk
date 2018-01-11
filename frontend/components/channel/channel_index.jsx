import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';


// ADD MODAL FOR CHANNELS
// SEARCH FOR ALL CHANNELS IN ORDER TO SUB
class ChannelIndex extends React.Component {
  render () {
    return (
      <div className="sidebar_list">
        <div className="channel_header">
          Channels
          <button className="add_channel_button"></button>
        </div>
        <div className="channel_list">
          <ul>
            {this.props.channels.map(channel => {
              return (
                <li className="li_list_item" key={channel.id}>
                  <NavLink className="channel_list_item"
                    to={`/channels/${channel.id}`}>
                    <div className="channel_hash"># </div>
                    {channel.title}
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
