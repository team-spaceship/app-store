import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppProfile extends Component {
  constructor() {
    super();

    this.state = {
      temporaryTitle: "App profile",
    };
  }
  render() {
    return (
      <div>
        <div className="container">
          header
        </div>
        <div className="container-light">
          <div className="container">
            <p>
              {this.state.temporaryTitle}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

AppProfile.propTypes = {

};

export default AppProfile;
