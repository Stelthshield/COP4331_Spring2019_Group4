import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookVenue from "./pages/BookVenue";
import MyBookings from "./pages/MyBookings";
import MyVenues from "./pages/MyVenues";
import MyVenueBookingInfo from "./pages/MyVenueBookingInfo";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import ListVenue from "./pages/ListVenue";
import LoginAccount from "./pages/LoginAccount";
import NoMatch from "./pages/NoMatch";
import Settings from "./pages/Settings";
import Splash from "./pages/Splash";
import EditVenue from "./pages/EditVenue";
import ViewVenue from "./pages/ViewVenue";
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
            <Route exact path="/my-venue-booking-info" component={MyVenueBookingInfo} />
            <Route exact path="/my-venues" component={MyVenues} />
            <Route exact path="/edit-venue" component={EditVenue} />
            <Route exact path="/login" component={LoginAccount} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/view-venue" component={ViewVenue} />
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
