import React from 'react';
import { Link } from 'react-router-dom';


// ADD MODAL FOR CHANNELS
// SEARCH FOR ALL CHANNELS IN ORDER TO SUB
class ChannelIndex extends React.Component {
  render () {
    return (
      <div>
        <p>Channels</p>
        <button className="add_channel"></button>
        <ul>
          <li>
            {this.props.channels.map(channel => {
              return (
                <Link to={`/channels/${channel.id}`}>
                  {channel.title}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default ChannelIndex;
