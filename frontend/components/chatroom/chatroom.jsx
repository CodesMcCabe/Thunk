import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import MessageIndexItem from './message_index_item';
import MessageFormContainer from '../message_form/message_form_container';
// import ActionCable from 'actioncable';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.scrollLastMessage = this.scrollLastMessage.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.messages !== nextProps.messages) {
      this.scrollLastMessage();
    }
  }

  componentDidMount() {
    this.props.fetchUsers().then(this.props.fetchMessages);
    this.props.fetchChannels();
  }

  componentDidUpdate() {
    this.scrollLastMessage();
  }

  scrollLastMessage () {
    document.getElementById('chat_scroll').scrollTop = 9999999;
  }

  // CAN PROB ADD DELETE METHOD FOR MESSAGE ITEM
  render() {
      return (
        <div>
          <div className="chatroom_page">
            <div className="sidebar_container">
              <div className="sidebar_header">{<SidebarContainer />}</div>
              <div className="sidebar_scroll">Channels</div>
            </div>

            <div className="chat_container">
              <header className="chatroom_header">Chat Room</header>
              <div id="chat_scroll" className="chatlog_container">
                <ul className="chatlog">
                  {this.props.messages.map(message => (
                    <MessageIndexItem
                      key={message.id}
                      message={message}
                      user={this.props.users[message.user_id]}/>
                  ))}
                </ul>
              </div>
                {<MessageFormContainer />}
            </div>

          </div>
      </div>
      );
    }
}

export default Chatroom;
