import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
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
      <li className="chatlog" key={`chat_${el.id}`}>
        <span>{ el.content }</span>
      </li>
    );
  });
}

  createSocket() {
    let cable = ActionCable.createConsumer();
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
        <div className="sidebar_header"><SidebarContainer /></div>
        <div className="sidebar_scroll">Channels</div>
        <div id="chatroom_page">
          <header className="chatroom_header">Chat Room</header>
            <ul>
              { this.renderChatLog() }
            </ul>
        <footer>
          <input type="text"
            onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
            value={this.state.currentChatMessage}
            onChange={ (e) => this.updateCurrentChatMessage(e)}
            placeholder="Enter your message..."
            className="send_message_box"/>
        </footer>  
      </div>
      </div>
      );
    }
}

export default Chatroom;
