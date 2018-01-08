import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import MessageIndexItem from './message_index_item';
// import ActionCable from 'actioncable';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMessage: '',
      chatLogs: [],
      currentUser: this.props.currentUser
    };

  }


  componentDidMount() {
    this.createSocket();
    this.props.fetchMessages();
  }

  updateCurrentMessage(event) {
    this.setState({
      currentMessage: event.target.value
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
    this.chats.create({
      content: this.state.currentMessage,
      user_id: this.state.currentUser.id,
      channel_id: 1
    });
    this.setState({currentMessage: ''});
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
        content: chatContent.content,
        user_id: chatContent.user_id,
        channel_id: chatContent.channel_id
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
          <div className="chatroom_page">
            <div className="sidebar_container">
              <div className="sidebar_header"><SidebarContainer /></div>
              <div className="sidebar_scroll">Channels</div>
            </div>

            <div className="chat_container">
              <header className="chatroom_header">Chat Room</header>
              <div className="chatlog_container">
                <ul className="chatlog">
                  {this.props.messages.map(message => (
                    <MessageIndexItem key={message.id} message={message}/>
                  ))}
                  { this.renderChatLog() }
                </ul>
              </div>
              <footer className="message_footer_container">
                <button className="message_add_file">A</button>
                <input type="text"
                  onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
                  value={this.state.currentMessage}
                  onChange={ (e) => this.updateCurrentMessage(e)}
                  placeholder="Enter your message..."
                  className="message_box"/>
              </footer>
            </div>

          </div>
      </div>
      );
    }
}

export default Chatroom;
