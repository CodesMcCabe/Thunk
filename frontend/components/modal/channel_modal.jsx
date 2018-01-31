import React from 'react';
import Modal from 'react-modal';

class ChannelModal extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      modalOpen: false,
      title: "",
      purpose: "",
      invites: "",
      admin_id: this.props.admin_id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state);
    this.props.createChannel({channel});
    this.closeModal();
    e.currentTarget.value = "";
}


  closeModal() {
    this.setState({ modalOpen: false, title: "", purpose: "",
      invites: ""});
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
      <div className="channel_header_inner">
        <div className="channel_button_container">
          <button className="add_channel_button"
            onClick={this.openModal}>
            +
          </button>
        </div>

        <Modal isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          className={{
          base: 'channel_modal',
          afterOpen: 'channel_modal_after-open',
          beforeClose: 'channel_modal_before-close'
          }}>


          <div className="modal_mid_container">
            <h1 className="modal_header">Create a Channel</h1>
            <div className="modal_notes">Channels are where your members communicate.
              They're best organized around a topic - #leads, for example</div>
            <p>Anyone in your workspace can view and join this channel</p>
            <form className="channel_create_form" onSubmit={this.handleSubmit}>
              <label className="channel_labels">Name
                <input className="channel_name_input" autoFocus type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  placeholder="# e.g. leads"/>
                <div className="modal_notes">Names must be lowercase, without spaces or periods, around
                shorter than 22 characters.</div>
              </label>

              <label className="channel_labels">Purpose(optional)
                <input type="text"
                  className="channel_purpose_input"
                  value={this.state.purpose}
                  onChange={this.update('purpose')}/>
                <div className="modal_notes">
                  What's this channel about?</div>

              </label>

              <label className="channel_labels">Send invites to: (optional)
                <input type="type"
                  className="channel_invites_input"
                  value={this.state.invites}
                  onChange={this.update('invites')}/>
                <div className="modal_notes">Select up to 1000 people to
                   add to this channel.</div>
              </label>
              <button className="channel_button">Create Channel</button>
            </form>

            <button className="cancel_button" onClick={this.closeModal}>Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ChannelModal;
