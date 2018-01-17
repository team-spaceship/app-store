import React, { Component } from "react";
import "./appCard.css";

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  uninstallApps(app) {
    if (this.props.uninstall) {
      console.log(this.props.app);
      return (<div> <br /> <button className="btn-card" onClick={() => this.props.uninstall(app.version.app._id)}>uninstall</button></div>);
    } else {
      return (<button className="btn-card">See More</button>);
    }
  }

  render() {
    const { app } = this.props;

    const version = app.version || app.versions;

    let latest_version = (version && version[version.length - 1]) || version;

    function appDescriptionTrim() {
      if (!latest_version) {
        return;
      }

      latest_version = version[version.length - 1];

      if (latest_version && latest_version.description && latest_version.description.length > 80) {
        return latest_version.description.slice(0, 80) + "..." || latest_version.version.description;
      } else {
        return (latest_version && latest_version.description) || (latest_version && latest_version.version.description);
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
              src={(latest_version && latest_version.banner_path) || "https://cdn.dribbble.com/users/380268/screenshots/1187493/timelapse-2.gif"}
              alt="app-logo"
            />
            <h4>{app.name || latest_version.app.name}</h4>
            <p className="app--card-description">{appDescriptionTrim()}</p>
            {this.uninstallApps(this.props.app)}
          </div>
        </div>
      </div>
    );
  }
}

export default AppCard;
