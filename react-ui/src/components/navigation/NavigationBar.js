import React, { Component } from 'react';
import './navigationbar.css'

class NavigationBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand lumos-logo" href="#">Lumos Logo</a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Login / Register</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;