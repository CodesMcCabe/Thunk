import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return(
      <nav>
        <p>Welcome {currentUser.username}</p>
        <button onClick={ logout }>Log out</button>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>
    );
  }
};

export default Greeting;
