import React, { Component } from 'react';
import NavigationBar from "../../navigation/NavigationBar";
import UserService from '../../../services/userService';

import "./profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.UserService = new UserService();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.checkUserLogin();
  }

  async checkUserLogin() {
    const account_info = await this.UserService.getUserInfo();

    if (!account_info.loggedIn) {
      return;
    }
  
    this.setState({
      user: account_info.user,
    });
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <section className="profile-section">
            <h2>Profile</h2>
            <form action={process.env.REACT_APP_STORE_API + "/saveProfile"} method="post">
              <input type="hidden" name="id" value={this.state.user.id} />
              <table>
                <tbody>
                  <tr>
                    <td>First name:</td>
                    <td><input type="text" name="first_name" value={this.state.user.first_name} /></td>
                  </tr>
                  <tr>
                    <td>Last name:</td>
                    <td><input type="text" name="last_name" value={this.state.user.last_name} /></td>
                  </tr>
                  <tr>
                    <td>E-mail:</td>
                    <td><input type="text" name="email" value={this.state.user.email} /></td>
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
          </section>
        </div>
      </div>
    );
  }
}

export default Profile;
