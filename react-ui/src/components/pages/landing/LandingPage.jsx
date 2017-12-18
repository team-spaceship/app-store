import React from 'react';
import Header from "../../header/Header";
import AppCard from "../../app-card/AppCard";
import LightBulb from '../../../images/LightBulb.png';


import "./landingpage.css";

const LandingPage = () => {
  const title = "WHAT'S NEW";
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="container">
          <section className="wrapper--info">
            <div className="wrapper--box">
              <div className="box--border">
                <ul>
                  <li><h5>OUT OF THE BOX</h5></li>
                </ul>
              </div>
            </div>
            <div className="box--thinking">
              <h2>HOW WE THINK</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste enim nihil tempora ex nam rem beatae, cumque cupiditate quia magni vitae cum veniam. Quam quia illum ad dolorem, tempore nesciunt quasi accusantium ex fugiat, magni sapiente quos. Cum harum ducimus dignissimos maxime maiores quidem dolorum nostrum delectus, beatae et.</p>
              <img src="https://static1.squarespace.com/static/52f7dbf3e4b0a5a45c1a6bdd/57e6a2ae6b8f5b926163c53b/57e6a2f129687f1c49bd5e14/1474733830099/kickstarter-logo-black.png" alt="" />
              <div className="lightbar" />
            </div>
          </section>
        </div>
      </div>
      <div className="wrapper--bg">
        <div className="container">
          <section className="wrapper--specs">
            <div><h2>WHAT'S <br /> NEW</h2></div>
            <div>
              <ul>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
              </ul>
            </div>
            <div>
              <ul>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
                <li><img src={LightBulb} alt="lightbulb icon" />INCLUDES A MOBILE APP</li>
              </ul>
            </div>
          </section>
        </div>
        <h1 className="bg--text left">WHAT'S <br /> INSIDE</h1>
      </div>
      <div className="wrapper">
        <div className="container">
          <section className="wrapper--info">
            <div className="box--thinking">
              <h2>FEATURED APPS</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste enim nihil tempora ex nam rem beatae, cumque cupiditate quia magni vitae cum veniam. Quam quia illum ad dolorem, tempore nesciunt quasi accusantium ex fugiat, magni sapiente quos. Cum harum ducimus dignissimos maxime maiores quidem dolorum nostrum delectus, beatae et.</p>
            </div>
          </section>
        </div>
      </div>
      <div className="wrapper--bg">
        <div className="container">
          <section className="wrapper--specs">
            <div><h2>ARE YOU <br /> <span>INSPIRED</span> <br /> TO MAKE AN APP?</h2></div>
          </section>
        </div>
        <h1 className="bg--text right">ARE YOU <br /> INSPIRED? <br /></h1>
      </div>
    </div >
  );
};

export default LandingPage;
