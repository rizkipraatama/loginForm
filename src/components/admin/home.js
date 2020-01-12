import React, { Component } from "react";
import Login from "../login";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.loggedInStatus) {
      <Login />;
    }
    return (
      <div>
        <h1>Home admin</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
      </div>
    );
  }
}
