import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LumosLogo from '../../images/lumosLogo.png';
import './navigationbar.css';
import UserService from '../../services/userService';

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.UserService = new UserService();
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    this.checkUserLogin();
  }

  async checkUserLogin() {
    const user = await this.UserService.isAuthenticated();
    console.log(user.loggedIn);
    this.setState({
      loggedIn: user.loggedIn,
    });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <img src={LumosLogo} alt="" className="lumos-logo" />
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={process.env.REACT_APP_STORE_API + "/profile"} >{this.state.loggedIn ? 'Profile' : 'Login / Register'}</a>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
