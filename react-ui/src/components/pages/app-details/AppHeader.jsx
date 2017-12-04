import React from 'react';
import NavigationBar from '../../navigation/NavigationBar';

const AppHeader = (props) => {
  return (
    <div>
      <NavigationBar />
      <div>
        <p className="lead app-lead">A plugin called</p>
        <h1 className="display-3 intro-text">{props.name}</h1>

        <p className="lead">
          <button type="button" className="btn btn-main">Check it out!</button>
        </p>
      </div>
    </div>
  );
};

export default AppHeader;
