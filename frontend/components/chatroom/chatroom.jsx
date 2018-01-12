import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import MessageIndexItem from './message_index_item';
import MessageFormContainer from '../message_form/message_form_container';
import { Route } from 'react-router-dom';
import Modal from 'react-modal';
import BrowseChannelModal from '../modal/browse_channel_modal';


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
    this.props.fetchUsers().then(this.props.fetchMessages).then(
      this.props.fetchChannels);
  }

  componentDidUpdate() {
    this.scrollLastMessage();
  }

  scrollLastMessage () {
    document.getElementById('chat_scroll').scrollTop = 9999999;
  }

  // CAN PROB ADD DELETE METHOD FOR MESSAGE ITEM
  render() {
    let currentChannelTitle;
    if (!this.props.currentChannel) {
      currentChannelTitle = "";
    } else {
      currentChannelTitle = this.props.currentChannel.title;
    }

    return (
      <div>
        <div className="chatroom_page">
          <div className="sidebar_container">
            <Route render={() => <SidebarContainer
                currentChannelTitle={currentChannelTitle}/>} />
          </div>

          <div className="chat_container">
            <header className="chatroom_header">
              <div className="header_channel">
                #{currentChannelTitle}
              </div>
              <BrowseChannelModal />
            </header>
            <div id="chat_scroll" className="chatlog_container">
              <ul className="chatlog">
                {this.props.messages.map(message => {
                    return (
                      <MessageIndexItem
                        key={message.id}
                        message={message}
                        user={this.props.users[message.user_id]}/>
                    );

                })}
              </ul>
            </div>
              {<MessageFormContainer
                currentChannel={this.props.currentChannel}/>}
          </div>

        </div>
      </div>
    );
    }
}

export default Chatroom;
