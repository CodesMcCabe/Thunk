import React from 'react';
import Modal from 'react-modal';
// import Search from 'react-search-box';
// import ChannelModal from './channel_modal';
// import { Link } from 'react-router-dom';

class BrowseChannelModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalOpen: false,
      channels: this.props.channels
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    // this.renderChannels = this.renderChannels.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // const payload = {channel_id:}
  //   const channel = Object.assign({}, this.state);
  //   this.props.subscribeChannel();
  //   this.closeModal();
  // }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
    // this.props.fetchChannels();
  }

  openCreateModal () {
    // return (
    //   <ChannelModal />
    // );
  }

  renderChannels () {
    if (this.state.channels) {
      return (
        this.state.channels.map(channel => {
          let payload = {channel_id: channel.id,
            user_id: this.props.currentUser.id};
          return (
            <li>
              <Link onClick={this.subscribeChannel(payload)}>
                {channel.title}
              </Link>
            </li>
          );
        }
      )
    );
  } else {
    return(
      <div></div>
    );
  }

  }

  render() {
    const style = {
      overlay : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        backgroundColor : 'rgba(255, 255, 255, 0.75)',
        zIndex          : 10
      },
      content : {
        position        : 'fixed',
        top             : 0,
        left            : 0,
        right           : 0,
        bottom          : 0,
        border          : '1px solid #ccc',
        padding         : '50px',
        zIndex          : 11
      }
    };

    return(
      <div className="channel_header_inner">
        <button className="add_channel_button"
          onClick={this.openModal}>
          <div className="cssCircle">
            +
          </div>
        </button>

        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          afterOpenModal={this.props.fetchChannels}>



          <h1>Browse Channels</h1>
          {this.state.channels}
            <label>
              <input autoFocus type="text"
                value={this.state.title}
                onChange={this.update('title')}
                placeholder="Search Channels"/>
            </label>
            {this.renderChannels()}
          <button onClick={this.openCreateModal}>Create Channel</button>
          <button onClick={this.closeModal}>Cancel</button>
        </Modal>
      </div>
    );
  }
}
  // <Link to={`channels/${channel.id}`}>{channel.title}</Link>

export default BrowseChannelModal;
