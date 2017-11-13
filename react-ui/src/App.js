import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Overview from './components/store-overview/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Projector App Store</h1>
        </header>
        <p className="App-intro">
          Please login to go to your account.
        </p>
        <p className="App-body-text">
          {"Don't have a Projector yet? Order online from our hardware store!"}
        </p>
        <Overview />
      </div>
    );
  }
}

export default App;
