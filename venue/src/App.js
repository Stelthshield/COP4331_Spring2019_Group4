import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookVenue from "./pages/BookVenue";
import MyBookings from "./pages/MyBookings";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import ListVenue from "./pages/ListVenue";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Settings from "./pages/Settings";
import Splash from "./pages/Splash";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/book-venue" component={BookVenue} />
            <Route exact path="/list-venue" component={ListVenue} />
            <Route exact path="/my-bookings" component={MyBookings} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/settings" component={Settings} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

      /*<div className="App">
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
      </div>*/
    );
  }
}

export default App;
