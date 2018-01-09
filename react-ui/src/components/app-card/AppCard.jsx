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
      if (latest_version.description.length > 140) {
        return latest_version.description.slice(0, 140) + "...";
      } else {
        return latest_version.description;
      }
    }

    return (
      <div key={app._id} className="app--card col-lg-3 col-md-6 col-sm-12" onClick={() => {
        this.props.onAppSelect(this.props.app._id);
      }}>
        <div className="app--card-header">
          {/* Hier moet een application image gevuld worden. Deze is er volgens mij nog niet? Of is dit app_icon of app_banner? */}
          <img
            className="app--card-image"
            src={latest_version.banner_path || "https://cdn.dribbble.com/users/380268/screenshots/1187493/timelapse-2.gif"}
            alt="app-logo"
          />
          <p className="app--card-description">{appDescriptionTrim()}</p>
        </div>
        <div className="app--card-body">
          <h4>{app.name}</h4>
          {/* Is er een application type/category of iets in die richting? Die kan dan hier ingevuld worden. */}
          <span className="app--card-type">Application Type</span>
        </div>
      </div>
    );
  }
}

export default AppCard;
