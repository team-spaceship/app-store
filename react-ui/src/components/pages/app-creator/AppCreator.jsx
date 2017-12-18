import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppForm from './AppForm';
import NavigationBar from '../../navigation/NavigationBar';
import AppService from "../../../services/appService";
import { withRouter } from "react-router-dom";

class AppCreator extends Component {
  constructor() {
    super();

    this.AppService = new AppService();
  }

  handleFormSubmit = (app) => {
    this.AppService.submitApp(app);
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <NavigationBar />

        <div className="form-container"> 
          <h2>Create Lumos App</h2>
          <p className="form-information">
            Please provide us with the information necessary Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere beatae nostrum laudantium unde sunt quidem. Fugiat explicabo eum facilis eius, deleniti rerum similique, at error natus consequuntur saepe accusamus?
          </p>
          <AppForm handleFormSubmit={this.handleFormSubmit} app={{ name: '', version: '', description: '', url: '' }} />
        </div>
      </div>
    );
  }

}

AppCreator.propTypes = {

};

const AppCreatorWithRouter = withRouter(AppCreator);
export default AppCreatorWithRouter;