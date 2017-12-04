import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppForm from './AppForm';
import NavigationBar from '../../navigation/NavigationBar';

class AppCreator extends Component {
  constructor() {
    super();

    this.state = {
      temporaryTitle: "Create Lumos App",
    };
  }

  handleFormSubmit(app) {
    // temporary untill backend call to create an app is present
    console.log(app);
  }

  render() {
    return (
      <div className="container">
        <NavigationBar />

        <div className="form-container"> 
          <h2>{this.state.temporaryTitle}</h2>
          <p className="form-information">
            Please provide us with the information necessary Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere beatae nostrum laudantium unde sunt quidem. Fugiat explicabo eum facilis eius, deleniti rerum similique, at error natus consequuntur saepe accusamus?
          </p>
          <AppForm handleFormSubmit={this.handleFormSubmit} app={{ appname: 'hodor', version: '1', description: '', apprepository: '' }} />
        </div>
      </div>
    );
  }

}

AppCreator.propTypes = {

};

export default AppCreator;
