import React, { Component } from 'react';

class AppCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const app = this.props.app;

    return (
      <div key={app.id}>
        <div className="app--card-header">
        <h3>{app.name}</h3>
        </div>
        <div className="app--card-body">
        <p>{app.description}</p>
        </div>
      </div>
    );
  }
};

export default AppCard;
