import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Base styles
import './index.css';

import Overview from './components/pages/store-overview/Overview';
import AppDetails from './components/pages/app-details/AppDetails';
import AppCreator from './components/pages/app-creator/AppCreator';
import AppProfile from './components/pages/app-profile/AppProfile';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Overview} />
      <Route path="/app/:id/details" component={AppDetails} />
      <Route path="/app/create" component={AppCreator} />
      <Route path="/app/profile" component={AppProfile} />
    </div>
  </Router>
  , document.getElementById('root')
);

