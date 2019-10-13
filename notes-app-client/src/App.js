import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth } from "aws-amplify";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating && (
        <div className="App container">
          <Link to="/">Scratch</Link>
          {this.state.isAuthenticated ? (
            <div onClick={this.handleLogout}>Logout</div>
          ) : (
            <Fragment>
              <LinkContainer to="/signup">
                <div>Signup</div>
              </LinkContainer>
              <LinkContainer to="/login">
                <div>Login</div>
              </LinkContainer>
            </Fragment>
          )}
          <Routes childProps={childProps} />
        </div>
      )
    );
  }
}

export default App;
