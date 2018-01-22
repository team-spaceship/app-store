import React, { Component } from "react";
import Header from "../../header/Header";
import AppCard from "../../app-card/AppCard";
import AppService from "../../../services/appService";
import LightBulb from "../../../images/LightBulb.png";
import Beamer from "../../../images/Lumos.png";
import ScreenCaps from "../../../images/klepjes.png";




import "./landingpage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const title = "WHAT'S NEW";
    return (
      <div>
        <Header isLandingPage={true} />
        <div className="wrapper">
          <div className="container">
            <section className="wrapper--info">
              <div className="wrapper--box">
                <div className="box--border">
                  <ul>
                    <li>
                      <h5>OUT OF THE BOX</h5>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box--thinking">
                <h2>HOW WE THINK</h2>
                <p>
                  At Lumos, we think the world is a community in which we can
                  help each other, by building cool hardware and apps to run on it.
                </p>
                <img
                  src="https://static1.squarespace.com/static/52f7dbf3e4b0a5a45c1a6bdd/57e6a2ae6b8f5b926163c53b/57e6a2f129687f1c49bd5e14/1474733830099/kickstarter-logo-black.png"
                  alt=""
                />
                <span className="lightbar" />
              </div>
              <img className="box--beamer" src={Beamer} alt="" />

            </section>
          </div>
        </div>
        <div className="wrapper--bg">
          <div className="container">
            <section className="wrapper--specs">
              <div>
                <h2>
                  WHAT'S <br /> NEW
                </h2>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={LightBulb} alt="lightbulb icon" />Spaceship Support
                  </li>
                  <li>
                    <img src={LightBulb} alt="lightbulb icon" />Mobile app
                  </li>
                  <li>
                    <img src={LightBulb} alt="lightbulb icon" />1's of Lumos Apps
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <img src={LightBulb} alt="lightbulb icon" />Build communities
                  </li>
                  <li>
                    <img src={LightBulb} alt="lightbulb icon" />Sleep better
                  </li>
                  <li>
                    <img src={LightBulb} alt="lightbulb icon" />Ambient information
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <h1 className="bg--text left">
            WHAT'S <br /> INSIDE
          </h1>
        </div>
        <div className="wrapper--featured">
          <div className="container">
            <div className="row">
              <div className="box--thinking col-md-6">
                <h2>LUMOS PROTECTORS</h2>
                <p>
                  These are must-haves protectors
                </p>
                <span className="lightbar" />
              </div>
              <div className="col-md-6">
                <img className="screencaps--img" src={ScreenCaps} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper--bg">
          <div className="container">
            <section className="wrapper--specs">
              <div>
                <h2>
                  ARE YOU <br /> <span className="span-title">INSPIRED</span>{" "}
                  <br /> TO MAKE AN APP?
                </h2>
              </div>
            </section>
          </div>
          <h1 className="bg--text right">
            ARE YOU <br /> INSPIRED? <br />
          </h1>
        </div>
      </div>
    );
  }
}

export default LandingPage;
