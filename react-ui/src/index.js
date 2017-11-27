import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppDetails from './components/app-details/AppDetails'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/app/:id/details" component={AppDetails} />
    </div>
  </Router>
  , document.getElementById('root')
);

