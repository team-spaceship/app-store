import React from "react";
import { Link } from "react-router-dom";
import LumosLogo from "../../images/lumosLogo.png";
import "./navigationbar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <img src={LumosLogo} alt="" className="lumos-logo" />

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/app/create" className="nav-link">
              Create App
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login / Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
