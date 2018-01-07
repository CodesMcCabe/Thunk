import React from 'react';
// import Message from './message';
// import ActionCable from 'actioncable';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentChatMessage: '',
      chatLogs: []
    };

  }


  componentDidMount() {
    this.createSocket();
  }

  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  // CAN JUST USE REDUX STATE TO FETCHMESSAGES DONT NEED A LOCAL STATE
  handleSendEvent(e) {
    e.preventDefault();
    this.chats.create(this.state.currentChatMessage);
    this.setState({currentChatMessage: ''});
  }

  renderChatLog() {
  return this.state.chatLogs.map((el) => {
    return (
      <li key={`chat_${el.id}`}>
        <span>{ el.content }</span>
      </li>
    );
  });
}

  createSocket() {
    let cable = ActionCable.createConsumer('wss://aa-thunk.herokuapp.com/cable');
    this.chats = cable.subscriptions.create({
    channel: 'ChatroomChannel'
  }, {
    connected: () => {},
    received: (data) => {
      let chatLogs = this.state.chatLogs;
      chatLogs.push(data);
      this.setState({ chatLogs: chatLogs });
    },
    create: function(chatContent) {
      this.perform('create', {
        content: chatContent
      });
    }
  });
  }

  handleChatInputKeyPress(e) {
    if(e.key === 'Enter') {
      this.handleSendEvent(e);
    }
  }

  // THIS CURRENTLY WOULD RENDER ALL MESSAGES
  // WOULD I WANT TO BREAKOUT THE FORM PART OF THE COMPONENT?
  // HOW DO I GO ABOUT COMBINING THOSE IF I DO?
  // ADD MESSAGE INDEX COMPONENT
  render() {
      return (
        <div>
          <h1>Chat Room</h1>
            <ul>
              { this.renderChatLog() }
            </ul>
          <input type="text"
            onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
            value={this.state.currentChatMessage}
            onChange={ (e) => this.updateCurrentChatMessage(e)}
            placeholder="Enter your message..."/>
          <button onClick={ (e) => this.handleSendEvent(e) }>Send</button>
      </div>
      );
    }
}

export default Chatroom;
