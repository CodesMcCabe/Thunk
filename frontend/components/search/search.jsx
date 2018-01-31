import React from 'react';
import SearchIndexItem from './search_index_item';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      currentlyDisplayed: []
    };
  }
  // filter through all channels and if the channel title includes the letter
  // set currentlyDisplayed to filtered and update state
  // searchTerm would update to event.target.value and render to the screen
  filterChannels(e) {

    let channels = this.props.channels.filter(channel => (
      channel.title.toLowerCase().includes(e.target.value.toLowerCase()) &&
      channel.is_dm === false
    ));

    let users = this.props.users.filter(user => (
      user.username.toLowerCase().includes(e.target.value.toLowerCase())
    ));

    return channels.concat(users);
  }

  update(e) {
    this.setState({
      searchTerm: e.target.value,
      currentlyDisplayed: this.filterChannels(e)
    });
  }

  hideEmptySearch() {
    const dropdown = document.getElementById('search_dropdown');
    if (dropdown && (this.state.searchTerm.length === 0)) {
      return (
        <div className="search_default">Search for channels or friends</div>
      );
    } else if (dropdown && this.state.currentlyDisplayed.length === 0) {
      return (
        <div className="search_default">No results.</div>
      );
    } else if (dropdown) {
      return (
        <ul className="search_dropdown_list">
          {this.state.currentlyDisplayed.map((channel, idx) => {
            return(
              <SearchIndexItem
                key={idx}
                channel={channel}
                createChannel={this.props.createChannel}
                currentUser={this.props.currentUser}/>
            );
          })}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="search_container">
        <input type='text'
          value={this.state.searchTerm}
          onChange={(e) => this.update(e)}
          placeholder=' &#128269; Search'
          className="search_input"/>

        <div id="search_dropdown" className="search_dropdown">
          {this.hideEmptySearch()}
        </div>
      </div>
    );
  }
}

export default Search;
