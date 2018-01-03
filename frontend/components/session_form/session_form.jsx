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
      <div id="page">
        <div id="page_contents">
          <form onSubmit={this.handleSubmit} className="card align_center
            span_4_of_6 col large_left_padding large_right_padding
            large_bottom_padding large_bottom_margin float_none margin_auto">

            {this.renderFormHeader()}

            {this.renderErrors()}
            <div class="col span_4_of_6 float_none margin_auto">
              <p>
                Enter your
                <strong> Username </strong>
                &
                <strong> Password</strong>
              </p>
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);