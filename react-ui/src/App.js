import React, { Component } from 'react';

import Overview from './components/store-overview/Overview';
import Header from './components/header/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Overview />
      </div>
    );
  }
}

export default App;
