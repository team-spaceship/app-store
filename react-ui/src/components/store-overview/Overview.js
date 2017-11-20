import React, { Component } from 'react';
import AppService from '../../services/appService';
import AppCard from '../app-card/AppCard';

import './overview.css'

class Overview extends Component {
  constructor(props) {
    super(props);

    this.AppService = new AppService();
    this.state = {
      apps: [],
    };

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
        <AppCard key={app.id} app={app} />
      ));
    } else return [];
  }

  render() {
    return (
      <div className="container">

        <section className="appstore-section">
          <h2>Lumos Originals</h2>
          <div className="row">
            <AppCard key={"test1"} app={{ name: "Clock", description: "such app very wow" }} />
            <AppCard key={"test2"} app={{ name: "Radio", description: "such app very wow" }} />
            <AppCard key={"test3"} app={{ name: "Public Transport", description: "such app very wow" }} />
            <AppCard key={"test4"} app={{ name: "Cooking", description: "such app very wow" }} />
          </div>
        </section>

        <section className="appstore-section">
          <h2>Featured Lumos Apps</h2>
          <div className="row">
            <AppCard key={"test5"} app={{ name: "Clock", description: "such app very wow" }} />
            <AppCard key={"test6"} app={{ name: "Radio", description: "such app very wow" }} />
            <AppCard key={"test7"} app={{ name: "Public Transport", description: "such app very wow" }} />
            <AppCard key={"test8"} app={{ name: "Cooking", description: "such app very wow" }} />
          </div>
        </section>

        <section className="appstore-section">
          <h2>All Lumos Apps</h2>
          <div className="row">
            {this.renderApps(this.state.apps)}
          </div>
        </section>

      </div>
    );
  }
}

export default Overview;
