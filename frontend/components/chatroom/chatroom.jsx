import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import MessageIndexItem from './message_index_item';
// import ActionCable from 'actioncable';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);
    // CURRENT MESSAGE SHOULD BE LOCAL STATE OF FORM COMPONENT
    // INSTEAD OF CHATLOGS, CHANGE GLOBAL STATE
    // FIX WILL ALLOW FOR SCROLL FIX WHEN IN MID-CHAT
    this.state = {
      currentMessage: '',
      chatLogs: [],
    };
    this.scrollLastMessage = this.scrollLastMessage.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.messages !== nextProps.messages) {
      this.scrollLastMessage();
    }
  }

  componentDidMount() {
    this.createSocket();
    this.props.fetchMessages();
  }

  componentDidUpdate() {
    this.scrollLastMessage();
  }

  scrollLastMessage () {
    document.getElementById('chat_scroll').scrollTop = 9999999;
  }

  updateCurrentMessage(event) {
    this.setState({
      currentMessage: event.target.value,
    });
  }

  // CAN JUST USE REDUX STATE TO FETCHMESSAGES DONT NEED A LOCAL STATE
  handleSendEvent(e) {
    e.preventDefault();
    this.chats.create({
      content: this.state.currentMessage,
      user_id: this.props.currentUser.id,
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
              <div id="chat_scroll" className="chatlog_container">
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
