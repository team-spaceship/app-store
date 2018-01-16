import React, { Component } from "react";
import "./appCard.css";

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
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
        className={!this.props.isLandingPage ? "app--card col-lg-3 col-md-6 col-sm-12" : "app--card col-md-6 col-sm-12"}
        onClick={() => {
          this.props.onAppSelect(this.props.app._id);
        }}
      >
        <div className="card--wrapper">
          <div className="app--card-body">
            <img
              className="app--card-image"
              src={latest_version.banner_path || "https://cdn.dribbble.com/users/380268/screenshots/1187493/timelapse-2.gif"}
              alt="app-logo"
            />
            <h4>{app.name}</h4>
            <p className="app--card-description">{appDescriptionTrim()}</p>
            <button className="btn-card">See More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AppCard;
