import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      typeUsername: null,
      typePassword: null,
      typeSubmit: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
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
      <div id="page">
        <div id="page_contents">
          <form onSubmit={this.handleSubmit} className="card align_center
            span_4_of_6 col large_left_padding large_right_padding
            large_bottom_padding large_bottom_margin float_none margin_auto">

            <h1>{this.renderFormHeader()}</h1>

            {this.renderErrors()}
            <div className="col span_4_of_6 float_none margin_auto">
              <p>
                Enter your
                <strong> Username </strong>
                &
                <strong> Password</strong>
              </p>
              <p className="domain_input no_bottom_margin">
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
                <button className="login_form_button btn_large
                  full_width">
                  <span>
                    {this.renderFormHeader()}
                  </span>
                </button>
              </p>
              <p className="large_bottom_margin">
                <button onClick={this.demo} className="login_form_button
                  btn_large full_width">
                  Guest login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default withRouter(SessionForm);
