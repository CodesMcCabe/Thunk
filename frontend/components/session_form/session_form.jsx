import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
          <li key={`error-${i}`}>
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
      return <h1>Sign in</h1>;
    } else {
      return <h1>Sign up</h1>;
    }
  }

  render() {
    return(
      <div className="page_contents">
        <form onSubmit={this.handleSubmit} className="card
          login-form-container align-center span_4_of_6 large_left_padding
          large_right_padding login-form">

          {this.renderFormHeader()}

          {this.renderErrors()}

              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-field"
                placeholder="Username"/>

              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-field"/>

              <button className="login-form-button button_large
                small_top_margin full_width">
              {this.renderFormHeader()}</button>
          
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
