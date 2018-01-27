import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      searchTerm: '',
      currentlyDisplayed: []
    };
  }
  // filter through all channels and if the channel title includes the letter
  // set currentlyDisplayed to filtered and update state
  // searchTerm would update to event.target.value and render to the screen
  update(e) {
    let newlyDisplayed = this.props.channels.filter(channel => {
      channel.title.includes(e.target.value);
    });

    this.setState({
      searchTerm: e.target.value,
      currentlyDisplayed: newlyDisplayed
    });
  }
  // search list item component, needs to be added
  render () {
    return (
      <div>
        <input type='text'
          value={this.state.searchTerm}
          onChange={(e) => this.update(e)}
          placeholder="Search channels"
          className="search_box"/>
        <div>
          <ul>
            {this.currentlyDisplayed.map(channel => {
              return(
                <li>channel.title</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
