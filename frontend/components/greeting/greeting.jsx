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
          <li className="nav-list-item"><a>Why Slack?</a></li>
          <li className="nav-list-item"><a>Pricing</a></li>
          <li className="nav-list-item"><a>About us</a></li>
          <li>{this.renderLoginHeader(this.props)}</li>
        </ul>
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
