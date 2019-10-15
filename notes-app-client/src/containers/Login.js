import React, { Component } from "react";
import "./Login.css";
import { Auth } from "aws-amplify";
import LoaderButton from "../components/LoaderButton";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.email);
  };

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      await Auth.signIn(this.state.email, this.state.password);
      this.props.userHasAuthenticated(true);
      this.props.history.push("/");
    } catch (e) {
      alert(e.message);
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <input
            label="Email"
            name="email"
            type="text"
            onChange={this.handleChange}
          />

          <input
            name="password"
            label="Password"
            onChange={this.handleChange}
            type="text"
          />
          <LoaderButton
            type="submit"
            disabled={!this.validateForm()}
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          >
            Login
          </LoaderButton>
        </form>
      </div>
    );
  }
}
