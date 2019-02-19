import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Venue under construction. Check back soon!
          </p>
          <a
            className="App-link"
            href="https://github.com/Stelthshield/COP4331_Spring2019_Group4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>
        </header>
      </div>
    );
  }
}

export default App;
