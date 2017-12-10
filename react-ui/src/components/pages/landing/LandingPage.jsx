import React from 'react';
import Header from "../../header/Header";
import AppCard from "../../app-card/AppCard";

import "./landingpage.css";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="container">
          <section className="wrapper--info">
            <div className="wrapper--box">
              <div className="box--border">
                <ul>
                  <li><h5>OUT</h5></li>
                  <li><h5>OF</h5></li>
                  <li><h5>THE</h5></li>
                  <li><h5>BOX</h5></li>
                </ul>
              </div>
            </div>
            <div className="box--thinking">
              <h2>HOW WE THINK</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste enim nihil tempora ex nam rem beatae, cumque cupiditate quia magni vitae cum veniam. Quam quia illum ad dolorem, tempore nesciunt quasi accusantium ex fugiat, magni sapiente quos. Cum harum ducimus dignissimos maxime maiores quidem dolorum nostrum delectus, beatae et.</p>
            </div>
          </section>
        </div>
      </div>
      <div className="wrapper--bg">
        <div className="container">
          <section className="wrapper--specs">
            <div><h2>WHAT'S <br /> INSIDE</h2></div>
            <div>
              <ul>
                <li>INCLUDES A MOBILE APP</li>
                <li>INCLUDES A MOBILE APP</li>
                <li>INCLUDES A MOBILE APP</li>
                <li>INCLUDES A MOBILE APP</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>INCLUDES A MOBILE APP</li>
                <li>INCLUDES A MOBILE APP</li>
                <li>INCLUDES A MOBILE APP</li>
                <li>INCLUDES A MOBILE APP</li>
              </ul>
            </div>
          </section>
        </div>
        <h1>WHAT'S <br /> INSIDE</h1>
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
            <div><h2>ARE YOU <br /> INSPIRED?</h2></div>
          </section>
        </div>
        <h1>ARE YOU <br /> INSPIRED?</h1>
      </div>
    </div >
  );
};

export default LandingPage;
