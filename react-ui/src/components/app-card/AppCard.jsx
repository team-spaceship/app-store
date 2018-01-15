import React, { Component } from "react";
import "./appCard.css";

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { app } = this.props;

    const latest_version = app.versions[app.versions.length - 1];

    function appDescriptionTrim() {
      if (latest_version.description.length > 80) {
        return latest_version.description.slice(0, 80) + "...";
      } else {
        return latest_version.description;
      }
    }

    return (
      <div
        key={app._id}
        className={!this.props.isLandingPage ? "app--card col-md-6 col-sm-12" : "app--card col-lg-3 col-md-6 col-sm-12"}
        onClick={() => {
          this.props.onAppSelect(this.props.app._id);
        }}
      >
        <div className="card--wrapper">
          <div className="app--card-body">
            {/* Hier moet een application image gevuld worden. Deze is er volgens mij nog niet? Of is dit app_icon of app_banner? */}
            <img
              className="app--card-image"
              src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/169/full/EGH_MobxStateTree.png"
              alt="app-logo"
            />
            <h4>{app.name}</h4>
            {/* Is er een application type/category of iets in die richting? Die kan dan hier ingevuld worden. */}
            <p className="app--card-description">{appDescriptionTrim()}</p>
            <button className="btn-card">See More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppCard;
