import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "./components/background/Background";

// Base styles
import "./index.css";

import Overview from "./components/pages/store-overview/Overview";
import AppDetails from "./components/pages/app-details/AppDetails";
import AppCreator from "./components/pages/app-creator/AppCreator";
import AdminOverview from "./components/pages/admin/AdminOverview";
import Profile from "./components/pages/profile/Profile";
import LandingPage from "./components/pages/landing/LandingPage";
import NoMatch from "./components/pages/no-match/FourOFour";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/app/:id/details" component={AppDetails} />
        <Route path="/app/create" component={AppCreator} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={AdminOverview} />
        <Route component={NoMatch} />
      </Switch>
      <Background />
    </div>
  </Router>,
  document.getElementById("root")
);
