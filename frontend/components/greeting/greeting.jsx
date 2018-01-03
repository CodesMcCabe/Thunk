import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  renderLoginHeader ({ currentUser, logout }) {
    if (currentUser) {
      return(
        <div className="nav-user-loggedIn">
          <p>Welcome {currentUser.username}</p>
          <button onClick={ logout }>Log out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      );
    }
  }
  // can re-factor the <li> in css as children <li> of nav-link class?
  render () {
    return(
      <nav className="greeting-nav">
        <h1 className="nav-logo">Thunk</h1>
        <ul className="nav-links">
          <li className="nav-list-item">Why Slack?</li>
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About us</li>
        </ul>
        {this.renderLoginHeader(this.props)}
      </nav>
    );
  }
}

// const Greeting = ({ currentUser, logout }) => {
//   if (currentUser) {
//     return(
//       <nav>
//         <p>Welcome {currentUser.username}</p>
//         <button onClick={ logout }>Log out</button>
//         <ul>
//           <li>Why Slack?</li>
//           <li>Pricing</li>
//           <li>About us</li>
//         </ul>
//       </nav>
//     );
//   } else {
//     return (
//       <nav>
//         <Link to="/signup">Sign Up</Link>
//         <Link to="/login">Login</Link>
//           <ul>
//             <li>Why Slack?</li>
//             <li>Pricing</li>
//             <li>About us</li>
//           </ul>
//       </nav>
//     );
//   }
// };

export default Greeting;
