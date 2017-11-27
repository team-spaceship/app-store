import React, { Component } from 'react';
import NavigationBar from '../navigation/NavigationBar';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">

          <NavigationBar />

          <div className="lumos-leader">
            <h1 className="display-3 intro-text">This is Lumos</h1>
            <p className="lead">A smart, multipurpose beamer for displaying ambient information.</p>
           
            <p className="lead">
              <button type="button" className="btn btn-main">Check it out!</button>
            </p>
          </div>

        </div>
      </header>
    );
  }
}

export default Header;