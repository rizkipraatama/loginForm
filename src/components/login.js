import React, { Component } from "react";
import loginImg from "../../static/assets/close.jpg";
import Axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleInput(event) {
    event.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    };
    Axios.post(
      "http://localhost:3001/login",
      { user },
      { withCredentials: false }
    )
      .then(response => {
        console.log("res ", response);
      })
      .catch(error => {
        console.log("err ", error);
      });
    console.log("form submit");
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <form onSubmit={this.handleInput}>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}
