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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">

          {this.renderFormHeader()}

          {this.renderErrors()}
          <div>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-field-username"/>

              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-field-password"/>

            <button className="login-form-button">
              {this.renderFormHeader()}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
