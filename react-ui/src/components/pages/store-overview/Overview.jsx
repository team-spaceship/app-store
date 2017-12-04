import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppService from "../../../services/appService";
import AppCard from "../../app-card/AppCard";
import Header from "../../header/Header";

import "./overview.css";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.AppService = new AppService();

    this.state = {
      apps: []
    };

    this.onAppSelect = id => {
      this.props.history.push("/app/" + id + "/details");
    };

    // Retrieve all apps.
    this.getApps();
  }

  async getApps() {
    const apps = await this.AppService.getApps();

    this.setState({
      apps
    });
  }

  renderApps(apps) {
    if (apps && apps.length > 0) {
      return apps.map(app => (
        <AppCard
          key={"all" + app._id}
          app={app}
          onAppSelect={this.onAppSelect}
        />
      ));
    } else return [];
  }

  renderFeaturedApps(apps) {
    if (apps && apps.length > 0) {
      return apps.map(app => {
        if (app.isFeatured) {
          return (
            <AppCard
              key={"featured" + app._id}
              app={app}
              onAppSelect={this.onAppSelect}
            />
          );
        } else {
          return null;
        }
      });
    } else return [];
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <section className="appstore-section">
            <h2>Featured Lumos Apps</h2>
            <div className="row" />
          </section>

          <section className="appstore-section">
            <h2>All Lumos Apps</h2>
            <div className="row">{this.renderApps(this.state.apps)}</div>
          </section>
        </div>
      </div>
    );
  }
}

const OverviewWithRouter = withRouter(Overview);
export default OverviewWithRouter;
