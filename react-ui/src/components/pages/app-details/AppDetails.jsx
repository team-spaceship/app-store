import React, { Component } from 'react';
import AppService from '../../../services/appService';
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
        <header>
          <div className="container">
            <AppHeader appId={this.props.match.params.id} name={this.state.app.name} />
          </div>
          <div className="container-light">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h3>Description</h3>
                  <p>
                    {this.state.app.description}
                  </p>
                  <h3>Rating</h3>
                  sterren
                  <h3>Categories</h3>
                  <button className="cat">
                    Game
                  </button>
                  <button className="cat">
                    Cool
                  </button>
                  <button className="cat">
                    Interactive
                  </button>
                </div>
                <div className="col-md-5 offset-md-1">
                  <img className="featured-image" src="https://cdn.dribbble.com/users/380268/screenshots/1187493/timelapse-2.gif" alt="app-logo" />  
                  <h3>features</h3>
                  <p className="padding-right">
                    {this.state.app.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container call-to-action">
            <div className="row">
              <div className="col-md-4">
                <h2>Are you</h2>
                <h2 className="yellow">inspired</h2>
                <h2>to make an app?</h2>
              </div>
              <div className="col-md-7 offset-md-1">
                <p>Suspendisse rhoncus velit a nisi sagittis, at tempus erat lobortis. Quisque quis vestibulum elit. Integer consectetur volutpat eros nec auctor.</p>
              </div>
            </div>
          </div>
        </header>
      );
    } else {
      return null;
    }
  }
}

export default AppDetails;
