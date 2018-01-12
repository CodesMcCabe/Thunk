import React from 'react';
import GreetingContainer from './greeting/greeting_container';

class Homepage extends React.Component {
  render () {
    return (
      <div className="homepage">
        <header>
          <GreetingContainer />
        </header>

        <div className='homepage-intro'>
        <img className='welcome-box' src={window.staticImages.homeSide} />
        </div>
      </div>
    );
  }
}

export default Homepage;
