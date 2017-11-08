import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppService from './services/appService';
import AppCard from './components/AppCard';

class Store extends Component {
  constructor(props){
      super(props);
      
      this.AppService = new AppService();
      this.state = {
          apps: []
      }

      // Retrieve all apps.
      this.getApps();
  }
  
  async getApps () {
      const apps = await this.AppService.getApps();

      this.setState({
          apps: apps
      })
  }

  renderApps (apps) {
      if(apps.length > 0) {
        return apps.map((app, index) => (
            <AppCard key={index} app={app} />
        ));
      }
      else return [];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App Store</h1>
        </header>
        <p className="App-intro">
          List of applications
        </p>
	    <p className="App-body-text">
          {this.renderApps(this.state.apps)}
	    </p>
      </div>
    );
  }
}

export default Store;
