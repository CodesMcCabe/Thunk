import React from 'react';

const MessageIndexItem = ({ message }) => {
  return (
    <li>
      {message.content}
    </li>
  );
};

export default MessageIndexItem;
