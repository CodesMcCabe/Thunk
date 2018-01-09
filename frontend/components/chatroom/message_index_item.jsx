import React from 'react';

const MessageIndexItem = ({ user, message }) => {
  // STYLE AT THE UL LEVEL FOR FLEX USERNAME AND TIME INLINE
  // MESSAGE BELOW
  // AVATAR TO LEFT
  return (
    <li className="message_container">
        <div className="message_avatar">Image</div>
        <div className="message_data_container">
          <div className="message_header">
            <p className="message_username">{user.username}</p>
            <p className="message_time">{message.created_at}</p>
          </div>
          <div className="message_content">
            <p>{message.content}</p>
          </div>
        </div>
    </li>
  );
};

export default MessageIndexItem;
