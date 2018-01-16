import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavigationBar from '../../navigation/NavigationBar';
import AppService from "../../../services/appService";
import AppCard from "./AppCard";


class AdminOverview extends Component {
  constructor(props) {
    super(props);

    this.AppService = new AppService();

    this.state = {
      apps: [],
    };

    this.onAppSelect = (app) => {
      console.log(app);
      /* eslint-disable */
      const confirm = window.confirm(`Are you sure you want to delete ${app.name}`);
      /* eslint-enable */
      if (confirm) {
        console.log(`Deleting ${app.name} from the app-store.`);
        this.AppService.deleteApp(app._id);
      } 
    };
  }

  componentDidMount() {
    // Retrieve all apps.
    this.getApps();
  }

  async getApps() {
    const apps = await this.AppService.getApps();

    this.setState({
      apps,
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

  render() {
    return (
      <div className="container">
        <NavigationBar />
        <div>
          <section className="appstore-section admin">
            <h2>All Lumos Apps</h2>
            <div className="row">{this.renderApps(this.state.apps)}</div>
          </section>
        </div>
      </div>
    );
  }
}

const OverviewWithRouter = withRouter(AdminOverview);
export default OverviewWithRouter;
