import React from 'react';
import GreetingContainer from './greeting/greeting_container';

class Homepage extends React.Component {
  render () {
    return (
      <div>
        <header>
          <GreetingContainer />
        </header>
      </div>
    );
  }
}

export default Homepage;
