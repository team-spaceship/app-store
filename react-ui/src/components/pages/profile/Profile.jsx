import React, { Component } from 'react';
import NavigationBar from "../../navigation/NavigationBar";
import UserService from '../../../services/userService';
import AppService from "../../../services/appService";
import AppCard from "../../app-card/AppCard";

import "./profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.UserService = new UserService();
    this.AppService = new AppService();
    this.state = {
      user: {},
      apps: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.checkUserLogin();
    this.getApps().then(() => {
      this.setState();
    });
  }

  handleInputChange(event) {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState(user);
  }

  async checkUserLogin() {
    const account_info = await this.UserService.getUserInfo();

    if (!account_info.loggedIn) {
      return;
    }
  
    this.setState({
      loggedIn: account_info.loggedIn,
      user: account_info.user,
    });
  }

  async getApps() {
    const apps = await this.AppService.getInstalledApps();

    console.log("HOI");
    console.log(apps[0]);

    this.setState({
      apps,
    });
  }

  async uninstall(id) {
    const uninstall = await this.AppService.uninstallApp(id);
    this.getApps();
  } 

  renderApps(apps) {
    if (apps && apps.length > 0) { 
      return apps.map(app => (
        <AppCard
          key={"my" + app._id}
          app={app}
          onAppSelect={this.uninstall}
          uninstall={this.uninstall}
        />
      ));
    } else return [];
  }

  profilePage() {
    console.log("app state");
    console.log(this.state.apps);
    return (
      <div className="container">
        <section className="profile-section">
          <h2>Profile</h2>
          <form action={process.env.REACT_APP_STORE_API + "/saveProfile"} method="post">
            <input type="hidden" name="id" value={this.state.user.id} />
            <table>
              <tbody>
                <tr>
                  <td>First name:</td>
                  <td><input type="text" name="first_name" value={this.state.user.first_name} onChange={this.handleInputChange} /></td>
                </tr>
                <tr>
                  <td>Last name:</td>
                  <td><input type="text" name="last_name" value={this.state.user.last_name} onChange={this.handleInputChange} /></td>
                </tr>
                <tr>
                  <td>E-mail:</td>
                  <td><input type="text" name="email" value={this.state.user.email} onChange={this.handleInputChange} /></td>
                </tr>
                <tr>
                  <td colSpan="2"><input type="submit" value="Save changes" /></td>
                </tr>
              </tbody>
            </table>
          </form>
        </section>
        <section className="profile-section">
          <h2>Your devices</h2>
        </section>
        <section className="profile-section">
          <h2>Your apps</h2>
          <div className="row">{this.renderApps(this.state.apps)}</div>
        </section>
      </div>
    );
  }

  render() {
    return (
      <div>
        <NavigationBar />
        { this.state.loggedIn ? this.profilePage() : "Please log in to see your profile." }
      </div>
    );
  }
}

export default Profile;
