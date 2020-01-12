import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Home admin</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
      </div>
    );
  }
}
