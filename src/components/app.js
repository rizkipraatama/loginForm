import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./admin/Home";
import Login from "./login";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: false
    };
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Dashboard} />
            <Route
              exact
              path={"/Login"}
              render={props => (
                <Login {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
            <Route
              exact
              path={"/Home"}
              render={props => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
