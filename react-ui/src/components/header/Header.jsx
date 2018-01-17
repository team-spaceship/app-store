import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import HeaderBeamer from "../../images/Beamer_Header.png";
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

const Header = () => {
  return (
    <header>
      <div className="container">
        <NavigationBar />
        
        <div className="lumos-leader">
          <h1><span className="title-blue">Lumos</span> Projector</h1>
          <p className="lead">
          A smart, multipurpose projector for displaying ambient information.
          </p>
          { checkItOutButton() }
        </div>
      </div>
    </header>
  );
};

export default Header;
