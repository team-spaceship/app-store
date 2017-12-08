import React from "react";
import NavigationBar from "../navigation/NavigationBar";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <NavigationBar />

        <div className="lumos-leader">
          <h1>WE ARE</h1>
          <h1 className="title-blue">SPECIALIZED</h1>
          <h1>COMPETENTIES</h1>
          <p className="lead">
            A smart, multipurpose projector for displaying ambient information.
          </p>

          <p className="lead">
            <button type="button" className="btn btn-main">
              Check it out!
            </button>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
