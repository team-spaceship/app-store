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

    this.installApp = (appId) => {
      this.AppService.installApp(appId).then(() => {
        const installed_app = Object.assign({}, this.state.app);
        installed_app.is_installed = true;

        this.setState({ app: installed_app });
      });
    };
  }

  componentDidMount() {
    this.getAppById(this.props.match.params.id);
    console.log(this.state);
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
          <header>
            <div className="container">
              <AppHeader appId={this.props.match.params.id} app={this.state.app} installApp={this.installApp} />
            </div>
          </header>
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
                  <img className="featured-image" src="https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/169/full/EGH_MobxStateTree.png" alt="app-logo" />
                </div>
              </div>
            </div>
          </div>
          <div className="wrapper--bg">
            <div className="container">
              <section className="wrapper--specs">
                <div>
                  <h2>
                    ARE YOU <br /> <span className="span-title">INSPIRED</span>{" "}
                    <br /> TO MAKE AN APP?
                      </h2>
                </div>
              </section>
            </div>
            <h1 className="bg--text right">
              ARE YOU <br /> INSPIRED? <br />
            </h1>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default AppDetails;
