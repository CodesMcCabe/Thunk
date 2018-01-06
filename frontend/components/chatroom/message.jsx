import React from 'react';

const Message = ({ message }) => {
  return (
    <li>
      {message.content}
    </li>
  );
};

export default Message;
