import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';


const SearchIndexItem = ({channel, createChannel, currentUser, history}) => {
  // Uses channel as a proxy for DMs
  function createDirectMessage(e) {
    e.preventDefault();
    let payload = {channel: {is_dm: true, title: `${channel.username}`,
      admin_id: currentUser.id, invitations: [channel.id]}};

    createChannel(payload).then(directMessage =>
      history.push(`/channels/${directMessage.id}`)
    );
  }

  if (channel.title) {
    return (
      <li className="search_list_item">
        <NavLink to={`/channels/${channel.id}`}
          className="search_dropdown_link">
          {channel.title}
        </NavLink>
      </li>
    );
  } else {
    return (
      <li className="search_list_item">
        <a onClick={createDirectMessage}
          className="search_dropdown_link">
          {channel.username}
        </a>
      </li>
    );
  }
};

export default withRouter(SearchIndexItem);
