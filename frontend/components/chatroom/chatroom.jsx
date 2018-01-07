import React from 'react';
import Message from './message';
import { fetchMessage } from '../../actions/message_actions';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages,
      message: ""
    };

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
  // CAN JUST USE REDUX STATE TO FETCHMESSAGES DONT NEED A LOCAL STATE
  sendMessage(e) {
    e.preventDefault();
    this.props.sendMessage()
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
        </form>
      </div>
      );
    }
}

export default Chatroom;
