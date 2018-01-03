import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  renderLoginHeader ({ currentUser, logout }) {
    if (currentUser) {
      return(
        <div>
          <p>Welcome {currentUser.username}</p>
          <button onClick={ logout }>Log out</button>
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
        <h1 className="logo">Thunk</h1>
        <ul>
          <li>{this.renderLoginHeader(this.props)}</li>
        </ul>
      </nav>
    );
  }
}

export default Greeting;
