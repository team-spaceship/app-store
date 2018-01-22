import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppForm from './AppForm';
import NavigationBar from '../../navigation/NavigationBar';
import AppService from "../../../services/appService";
import { withRouter } from "react-router-dom";

class AppCreator extends Component {
  constructor() {
    super();

    this.state = {
      disableSubmitForm: false,
    }

    this.AppService = new AppService();
  }

  handleFormSubmit = (app) => {
    this.setState({ disableSubmitForm: true })

      this.AppService.submitApp(app).then((response) => {
        if (response && response.success) {
          this.props.history.push("/");
          return true;
        } else {
          this.setState({ disableSubmitForm: false })
          console.log('something went wrong', response.message);
          return false;
        }
      });
  }

  render() {
    return (
      <div className="container">
        <NavigationBar />

        <div className="form-container">
          <h2>Create Lumos App</h2>
          <p className="form-information">
            To submit a Lumos App to the App Store, you need to enter the 
            link to a Git repository in the form below. The repository needs 
            to have a file named <code>index.html</code>, which needs to contain 
            a JavaScript function <code>init()</code>. Also, please provide an
            informative description.
          </p>
          <p className="form-information">
            Click <a href="https://github.com/team-spaceship/projector-sheep">here</a> for an example of a Lumos App.
          </p>
          <AppForm handleFormSubmit={this.handleFormSubmit} app={{ name: '', version: '', description: '', url: '' }} disableSubmitForm={this.state.disableSubmitForm} />
        </div>
      </div>
    );
  }

}

AppCreator.propTypes = {

};

const AppCreatorWithRouter = withRouter(AppCreator);
export default AppCreatorWithRouter;