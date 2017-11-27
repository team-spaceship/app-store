import React, { Component } from 'react';
import AppService from '../../services/appService';
import AppHeader from './AppHeader';
import './appdetails.css';

class AppDetails extends Component {
  constructor(props) {
    super(props);

    this.AppService = new AppService();

    this.state = {
      app: null,
    };
  }

  componentDidMount() {
    this.getAppById(this.props.match.params.id);
  }

  async getAppById(id) {
    const app = await this.AppService.getAppById(id);

    this.setState({
      app,
    });
  }

  render() {
    if (this.state.app) {
      return (
        <div>
          <div className="container">
            <AppHeader appId={this.props.match.params.id} name={this.state.app.name} />
          </div>
          <div className="container-light">
            <div className="container">
              <p>
                {this.state.app.description}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AppDetails;
