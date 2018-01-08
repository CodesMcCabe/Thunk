import React from 'react';
import GreetingContainer from './greeting/greeting_container';

class Homepage extends React.Component {
  render () {
    return (
      <header>
        <GreetingContainer />
      </header>
    );
  }
}

export default Homepage;
