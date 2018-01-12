import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  renderLoginHeader ({ currentUser, logout }) {
    if (currentUser) {
      return(
        <div>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Sign in</Link>
        </div>
      );
    }
  }
  // can re-factor the <li> in css as children <li> of nav-link class?
  render () {
    return(
      <nav className="top persistent">
        <div>
          <a href="/">
          <img className="logo" src={window.staticImages.logo} /></a>
        </div>
        <ul>
          <li>{this.renderLoginHeader(this.props)}</li>
        </ul>
      </nav>
    );
  }
}

export default Greeting;
