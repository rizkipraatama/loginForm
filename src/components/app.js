import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./admin/Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NONE",
      user: {}
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
