import React, { Component } from 'react';
import LumosLogo from '../../images/lumosLogo.png'
import './navigationbar.css'

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">

        <img src={LumosLogo} alt="" className="lumos-logo"/>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login / Register</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;