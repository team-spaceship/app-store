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

    function appDescriptionTrim() {
      if (app.description.length > 100) {
        return app.description.slice(0, 100) + "...";
      } else {
        return app.description;
      }
    }

    return (
      <div key={app.id} className="col-md-3" >
        <div className="app--card">
          <div className="app--card-image">
            <p>{appDescriptionTrim()}</p>
            <img src="https://cdn.dribbble.com/users/931813/screenshots/3947702/artboard_1.png" alt=""/>
          </div>
          <div className="app--card-body">
            <div className="app--card-header">
              <h3>{app.name}</h3>
            </div>
            <div className="app--card-button" >
              <div className="app--card-button-tag"><p>Application Type</p></div>
              <button type="button" className="btn btn-main btn-card" 
                onClick={() => { this.props.onAppSelect(this.props.app._id); }}>
                install
                </button>
            </div>
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
    version: PropTypes.string,
  }).isRequired,
};

export default AppCard;
