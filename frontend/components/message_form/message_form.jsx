import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: this.props.currentMessage,
      currentUser: this.props.currentUser,
      chatLogs: []
    };
  }

  componentDidMount() {
    this.createSocket();
  }

  // handleKeyPress(e) {
  //   e.preventDefault();
  //   if (e.key === 'Enter') {
  //     // some function to handle message through correct channel
  //   }
  // }
  updateCurrentMessage(event) {
    this.setState({
      currentMessage: event.target.value,
    });
  }

  handleChatInputKeyPress(e) {
    if(e.key === 'Enter') {
      this.handleSendEvent(e);
    }
  }

  handleSendEvent(e) {
    e.preventDefault();
    this.chats.create({
      content: this.state.currentMessage,
      user_id: this.state.currentUser.id,
      channel_id: 1
    });
    this.setState({currentMessage: ''});
  }

  createSocket() {
    let cable = ActionCable.createConsumer();
    this.chats = cable.subscriptions.create({
    channel: 'ChatroomChannel'
  }, {
    connected: () => {},
    received: (data) => {
      switch (data.action) {
        case 'receiveMessage':
          this.props.receiveMessage(data.message);
        break;
      }
      // let chatLogs = this.state.chatLogs;
      // chatLogs.push(data);
      // this.setState({ chatLogs: chatLogs });
    },
    create: function(chatContent) {
      this.perform('create', {
        content: chatContent.content,
        user_id: chatContent.user_id,
        channel_id: chatContent.channel_id
      });
    }
  });
  }

  render () {
    return (
      <footer className="message_footer_container">
        <button className="message_add_file">A</button>
        <input type="text"
          onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
          value={this.state.currentMessage}
          onChange={ (e) => this.updateCurrentMessage(e)}
          placeholder="Enter your message..."
          className="message_box"/>
      </footer>
    );
  }
}

export default MessageForm;

// WILL IMPORT THIS INTO THE CHATROOM PRESENTATIONAL COMPONENT
