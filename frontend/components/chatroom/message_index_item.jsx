import React from 'react';
import moment from 'moment';

const MessageIndexItem = ({ user, message }) => {
  let randomIndex = Math.floor((Math.random() * 9) + 0);
  let avatarImage = window.avatarImages[randomIndex];

  return (
    <li className="message_container">
        <div className="message_avatar_container">
          <img className="member_avatar"
            src={avatarImage}/>
        </div>
        <div className="message_data_container">
          <div className="message_header">
            <p className="message_username">{user.username}</p>
            <p className="message_time">
              {moment(message.created_at).format('LT')}
            </p>
          </div>
          <div className="message_content_container">
            <div className="message_content">
              <p>{message.content}</p>
            </div>
          </div>
        </div>
    </li>
  );
};

export default MessageIndexItem;
