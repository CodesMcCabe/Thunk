import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import MessageIndexItem from './message_index_item';
import MessageFormContainer from '../message_form/message_form_container';
import { Route } from 'react-router-dom';
import Modal from 'react-modal';
import ChannelModal from '../modal/channel_modal';
import SearchContainer from '../search/search_container';

class Chatroom extends React.Component {
  constructor(props) {
    super(props);

    this.scrollLastMessage = this.scrollLastMessage.bind(this);
    this.isUserSubbed = this.isUserSubbed.bind(this);
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
    const chat = document.getElementById('chat_scroll');
    if (chat) {
      chat.scrollTop = 9999999;
    }
  }

  isUserSubbed() {
    const currentUserSubs = this.props.currentUser.channelSubs;
    if (this.props.currentChannel &&
      currentUserSubs.includes(this.props.currentChannel.id)) {
      return (
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
      );
    }
  }

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
              {<SearchContainer />}
            </header>
            {this.isUserSubbed()}
            {<MessageFormContainer
              currentChannel={this.props.currentChannel}/>}
            }
          </div>

        </div>
      </div>
    );
    }
}

export default Chatroom;
