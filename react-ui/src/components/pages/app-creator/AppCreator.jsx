import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppCreator extends Component {
  constructor() {
    super();

    this.state = {
      temporaryTitle: "Create Lumos App",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.temporaryTitle}</h2>
      </div>
    );
  }
}

AppCreator.propTypes = {

};

export default AppCreator;
