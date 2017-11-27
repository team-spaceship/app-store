import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './appCard.css';

class AppCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { app } = this.props;

    return (
      <div key={app.id} className="col-md-3" onClick={() => { this.props.onAppSelect(this.props.app._id); }}>
        <div className="app--card">
          <div className="app--card-image"></div>
          <div className="app--card-body">
            <div className="app--card-header">
              <h3>{app.name}</h3>
            </div>
            <p>{app.description}</p>
            <button type="button" className="btn btn-main">install</button>
          </div>
        </div>
      </div>
    );
  }
}

AppCard.propTypes = {
  app: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    app_icon: PropTypes.string.isRequired,
    app_banner: PropTypes.string.isRequired,
    min_os_version: PropTypes.string.isRequired,
    version: PropTypes.string.isRequired,
  }).isRequired,
};

export default AppCard;
