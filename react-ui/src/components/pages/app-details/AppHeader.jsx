import React from 'react';
import NavigationBar from '../../navigation/NavigationBar';

const AppHeader = (props) => {
  return (
    <div>
      <NavigationBar />
      <div className="detail-head row">
        <div className="col-md-4">
          <p className="lead app-lead">A plugin called</p>
          <h1 className="display-3 intro-text">{props.name}</h1>
        <p className="lead">
          <button type="button" className="btn btn-main" onClick={(e) => { props.installApp(props.appId); }}>Install</button>
          </p>
        </div>
        <div className="col-md-7 offset-md-1">
          <div className="excerpt">
            Sed hendrerit metus quis est volutpat, vel molestie sapien luctus. Curabitur a tortor nec sem dignissim rutrum. Cras eu nulla pellentesque massa dignissim iaculis.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
