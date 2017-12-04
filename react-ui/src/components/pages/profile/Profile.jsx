import React, { Component } from 'react';
import NavigationBar from "../../navigation/NavigationBar";

import "./profile.css";

class Profile extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <section className="profile-section">
            <h2>Profile</h2>
          </section>
        </div>
      </div>
    );
  }
}

export default Profile;
