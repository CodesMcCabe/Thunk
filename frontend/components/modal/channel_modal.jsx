import React from 'react';
import Modal from 'react-modal';

class ChannelModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
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
      <div>
        <button className="add_channel_button"
          onClick={this.openModal}>Open Me!</button>

        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>



          <h1>Create a Channel</h1>
          <p>Channels are where your members communicate.
            They're best organized around a topic - #leads, for example</p>
          <p>Anyone in your workspace can view and join this channel</p>
          <form onSubmit={this.handleSubmit}>
            <label>Name
              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}/>
              <div>Names must be lowercase, without spaces or periods, around
              shorter than 22 characters.</div>
            </label>

            <label>Purpose(optional)
              <input type="text"
                value={this.state.name}
                onChange={this.update('purpose')}/>
              <div>What's this channel about?</div>
            </label>

            <label>Send invites to: (optional)
              <input type="type"
                value={this.state.invites}
                onChange={this.update('invites')}/>
              <div>Select up to 1000 people to add to this channel.</div>
            </label>
            <button>Create Channel</button>
          </form>

          <button onClick={this.closeModal}>Cancel</button>

        </Modal>
      </div>
    );
  }
}

export default ChannelModal;
