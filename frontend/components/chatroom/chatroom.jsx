import React from 'react';
import Message from './message';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = this.props.messages;
=======

>>>>>>> a_cable_testing
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// DOES OWNPROPS AUTOMATICALLY SETUP IN THIS STRUCTURE?
  componentDidMount() {
    this.setSocket();
<<<<<<< HEAD
    this.props.fetchChannelMessages(this.props.match.params.channelId);
=======
    this.props.fetchMessages();
>>>>>>> a_cable_testing
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  // CAN JUST USE REDUX STATE TO FETCHMESSAGES DONT NEED A LOCAL STATE
  updateMessages(msg) {
    const newMessages = Object.assign({}, this.state, msg);
    this.setState({messages: newMessages});
  }

  setSocket() {
    App.chatroom = App.cable.subscriptions.create('ChatroomChannel', {
      received(data) {
        switch (data.action) {
          case 'message':
            this.updateMessages(data.message); // here we will have to update INTERNAL and GLOBAL state
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
<<<<<<< HEAD
    return (
      <div>
        <h1>Chat Room</h1>
        <div>
          <ul>
            {this.state.messages.map(message => (
              <Message
                key={ message.id }
                message={ message }/>
            ))}
          </ul>
        </div>
      </div>
    );
  }


=======
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
        </div>
      );
    }
>>>>>>> a_cable_testing
}

export default Chatroom;
