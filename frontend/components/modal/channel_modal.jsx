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
        padding         : '20px',
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

          <button onClick={this.closeModal}>X</button>
          <h2>Im a modal</h2>
          <p>modal</p>

        </Modal>
      </div>
    );
  }
}

export default ChannelModal;
