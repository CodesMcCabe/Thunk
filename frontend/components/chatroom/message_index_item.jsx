import React from 'react';
import moment from 'moment';

const MessageIndexItem = ({ user, message }) => {
  // ADD PROFILE PICTURE IN IMAGE SPOT
  // UPDATE USER MODEL TO ACCEPT A PROFILE PIC

  return (
    <li className="message_container">
        <div className="message_avatar_container">
          <img className="member_avatar"
            src={window.staticImages.member_avatar}/>
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
