import React from 'react';
import { NavLink } from 'react-router-dom';


const SearchIndexItem = ({channel}) => {
  // debugger
  return (
    <li className="search_list_item">
      <NavLink to={`/channels/${channel.id}`}
        className="search_dropdown_link">
        # {channel.title}
      </NavLink>
    </li>
  );
};

export default SearchIndexItem;
