import React, { Component } from "react";
import LumosLogo from "../../images/lumosLogo.png";
import "./navigationBar.css";
import UserService from "../../services/userService";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.UserService = new UserService();
    this.state = {
      loggedIn: false,
      user: {},
    };
  }

  componentDidMount() {
    this.checkUserLogin();
  }

  async checkUserLogin() {
    const account_info = await this.UserService.getUserInfo();

    if (!account_info) {
      return;
    }

    this.setState({
      loggedIn: account_info.loggedIn,
      user: account_info.user,
    });
  }

  showProfile() {
    if (this.state.loggedIn) {
      return (
        <a className="nav-link" href="/profile">
          {this.state.user.first_name}&rsquo;s Profile
        </a>
      );
    } else {
      return (
        <a
          className="nav-link"
          href={process.env.REACT_APP_STORE_API + "/profile"}
        >
          Login / Register
        </a>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a href="/">
          <img src={LumosLogo} alt="" className="lumos-logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">{this.showProfile()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavigationBar;
