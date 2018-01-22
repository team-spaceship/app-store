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
      logs: [],
    };

    this.onAppSelect = async (app) => {
      console.log(app);
      /* eslint-disable */
      const confirm = window.confirm(`Are you sure you want to delete ${app.name}`);
      /* eslint-enable */
      if (confirm) {
        console.log(`Deleting ${app.name} from the app-store.`);
        await this.AppService.deleteApp(app._id);
        this.getApps();
      } 
    };
  }

  componentDidMount() {
    // Retrieve all apps.
    this.getApps();
  }

  async getApps() {
    const apps = await this.AppService.getApps();
    const logs = await this.AppService.getDeleteLogs();

    this.setState({
      apps,
      logs,
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

  renderLogs(logs) {
    console.log('Hallooo');
    if (logs && logs.length > 0) {

      // Formate dates.
      for (let i = 0; i < logs.length; i += 1) {
        const date = new Date(logs[i].date);
        const min = (date.getMinutes() < 10)? '0' + date.getMinutes() : date.getMinutes();
        const hour = (date.getHours() < 10)? '0' + date.getHours() : date.getHours();
        logs[i].date_formatted = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + ' ' + hour + ':' + min;
      }
      console.log(logs);

      const rows = logs.map(log => (
        <div key={"log" + log._id} className="alert alert-warning row">{log.user_name}&nbsp;{log.title} - {log.date_formatted}</div>
      ));

      return rows;
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
          <section className="appstore-section admin">
            <h2>Delete Logs</h2>
            <div id="logs">{this.renderLogs(this.state.logs)}</div>
          </section>
        </div>
      </div>
    );
  }
}

const OverviewWithRouter = withRouter(AdminOverview);
export default OverviewWithRouter;
