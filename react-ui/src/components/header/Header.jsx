import React, { Component } from "react";
import NavigationBar from "../navigation/NavigationBar";
import Beamer from "../../images/Lumos.png";

import "./header.css";

function checkItOutButton() {
  if (document.location.href.indexOf("landing") == -1) {
    return (
      <p className="lead">
        <a className="btn btn-main" href="/landing">
          Check it out!
        </a>
      </p>
    );
  } else return "";
}



class Header extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.isLandingPage);
  }

  checkImageHeader() {
    if (this.props.isLandingPage) {
      return (
        <div className="lumos__content--img">
          <img src={Beamer} alt="" />
        </div>
      )
    }
  }

  render() {
    return (
      <header>
        <div className="container">
          <NavigationBar />

          <div className="lumos__content">
            <div className="lumos-leader">
              <h1><span className="title-blue">Lumos</span> Projector</h1>
              <p className="lead">
                A smart, multipurpose projector for displaying ambient information.
          </p>
              {checkItOutButton()}
            </div>
            {this.checkImageHeader()}
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
