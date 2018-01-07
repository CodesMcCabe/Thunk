import React from 'react';
import Message from './message';
import { fetchMessage } from '../../actions/message_actions';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages,
      content: {}
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// DOES OWNPROPS AUTOMATICALLY SETUP IN THIS STRUCTURE?
  componentDidMount() {
    this.setSocket();
    this.props.fetchMessages();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  // CAN JUST USE REDUX STATE TO FETCHMESSAGES DONT NEED A LOCAL STATE
  sendMessage() {
    this.props.sendMessage({content: this.state.content});
  }

  setSocket() {
    App.chatroom = App.cable.subscriptions.create('ChatroomChannel', {
      received(data) {
        switch (data.action) {
          case 'message':
            fetchMessage(data.message.id); // here we will have to update INTERNAL and GLOBAL state
            break;
        }
      }
    });
  }
  // THIS CURRENTLY WOULD RENDER ALL MESSAGES
  // WOULD I WANT TO BREAKOUT THE FORM PART OF THE COMPONENT?
  // HOW DO I GO ABOUT COMBINING THOSE IF I DO?
  // ADD MESSAGE INDEX COMPONENT
  render() {
      return (
        <div>
          <h1>Chat Room</h1>
          <div>
            <ul>
              {this.props.messages.map(message => (
                <Message
                  key={message.id}
                  message={message}/>
              ))}
            </ul>
          </div>
        <form onSubmit={this.sendMessage}>
          <input type="text" onChange={this.update('content')}/>
          <button>Submit</button>
        </form>
      </div>
      );
    }
}

export default Chatroom;
