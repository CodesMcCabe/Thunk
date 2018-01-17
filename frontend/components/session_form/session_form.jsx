import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';
import GreetingContainer from '../greeting/greeting_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      typeUsername: null,
      typePassword: null,
      typeSubmit: null,
      errors: this.props.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  changeFormMargin() {
    let margin = document.getElementById('form');
    if (margin.className === 'session_box') {
      margin.className = 'session_box_with_errors';
    }
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return (
        <div>
        </div>
      );
  } else {
    return(
      <div className="errors">
        <img className="hazard_icon" src={window.staticImages.hazard}/>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} >
              {error}
            </li>
          ))}
        </ul>
        {this.changeFormMargin()}
      </div>
    );
  }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderFormHeader() {
    if (this.props.formType === 'login') {
      return "Sign in";
    } else {
      return "Sign up";
    }
  }

  demo (e) {
   this.setState({username: '', password: ''});
   const user = { username: 'demo-user', password: 'password' };
   const username = {
   strings: [user.username],
   typeSpeed: 100
   };
   const password = {
     strings: [user.password],
     typeSpeed: 100
   };
   this.setState({
     typeUsername: setTimeout(() => {
       new Typed('.login-input-u', username);
     }, 50),
     typePassword: setTimeout(() => {
       new Typed('.login-input-p', password);
     }, 800),
     typeSubmit: setTimeout(() => {
       if (this.props.formType === 'login') {
       this.props.processForm({user}) ;
     } else {
       this.props.login({user}) ;
       }
     }, 1700)
   });
 }

  render() {
    return(
      <div>
        <GreetingContainer/>
        <div id="page">
        {this.renderErrors()}

        <div className="session_box" id="form">
          <form onSubmit={this.handleSubmit} className="form_box">

            <h1>{this.renderFormHeader()}</h1>

            <div className="">
              <p>
                Enter your
                <strong> Username </strong>
                &
                <strong> Password</strong>
              </p>
              <p className="">
                <input type="text"
                  id="domain"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-field login-input-u"
                  placeholder="Username"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"/>
                <br/>
                <input type="password"
                  id="domain"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.update('password')}
                  className="login-field login-input-p"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"/>
              </p>
              <p className="">
                <button className="session_box_button">
                  <span>
                    {this.renderFormHeader()}
                  </span>
                </button>
              </p>
            </div>
          </form>
          <p className="">
            <button onClick={this.demo} className="session_box_button">
              Guest login
            </button>
          </p>
        </div>
      </div>
    </div>
    );
  }


}

export default withRouter(SessionForm);
