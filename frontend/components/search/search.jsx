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
      channel.title.includes(e.target.value) && channel.is_dm === false
    ));

    let users = this.props.users.filter(user => (
      user.username.includes(e.target.value)
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
    if (dropdown && (this.state.searchTerm.length === 0 ||
      this.state.currentlyDisplayed.length === 0)) {
      return (
        <div>No channels found.</div>
      );
    // } else if (dropdown && this.state.currentlyDisplayed.length === 0) {
    //   return (
    //     <div>No results.</div>
    //   );
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
          placeholder="Search channels"
          className="search_input"/>

        <div id="search_dropdown" className="search_dropdown">
          {this.hideEmptySearch()}
        </div>
      </div>
    );
  }
}

export default Search;
