import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Link to="/">Scratch</Link>
        <LinkContainer to="/signup">
          <div>Signup</div>
        </LinkContainer>
        <LinkContainer to="/login">
          <div>Login</div>
        </LinkContainer>

        <Routes />
      </div>
    );
  }
}

export default App;
