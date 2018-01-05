import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeyPress(e) {
    e.preventDefault();
    if (e.key === 'Enter') {
      // some function to handle message through correct channel
    }
  }

  render () {
    return (
      <div>
        <form>
          <input type="text" onKeyPress={this.handleKeyPress}/>
        </form>
      </div>
    );
  }
}

export default MessageForm;

// WILL IMPORT THIS INTO THE CHATROOM PRESENTATIONAL COMPONENT
