import React, { Component } from 'react';
import AppHeader from './AppHeader'
import './appdetails.css'

class AppDetails extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <AppHeader appId={this.props.match.params.id} />
        </div>
        <div className="container-light">
          <div className="container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio inventore modi quo molestiae enim sed perspiciatis facilis aliquam harum rem laudantium maxime corrupti iusto voluptatum voluptates perferendis, quisquam nemo eveniet!
                    </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDetails;