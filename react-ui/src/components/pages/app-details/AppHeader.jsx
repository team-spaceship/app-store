import React, { Component } from 'react';
import NavigationBar from '../../navigation/NavigationBar';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  installApp() {
    if (this.props.app.is_installed) {
      return (
        <button type="button" className="btn btn-main" disabled>
          Installed
        </button>
      );
    }
    return (
      <button type="button" className="btn btn-main" onClick={(e) => { this.props.installApp(this.props.appId); }}>
        Install
      </button>
    );
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="detail-head row">
          <div className="col-md-4">
            <p className="lead app-lead">Lumos app</p>
            <h1 className="display-3 intro-text">{this.props.app.name}</h1>
            <p className="lead">
              {this.installApp()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHeader;
