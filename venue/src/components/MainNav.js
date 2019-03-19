import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="navLink" ><Link to="/home" id=""><a>Home</a></Link></li>
                        <li className="navLink"><Link to="/list-venue"><a>List Venue</a></Link></li>
                        <li className="navLink"><Link to="/book-venue"><a>Book Venue</a></Link></li>
                        <li className="navLink"><Link to="/my-venues"><a>My Venues</a></Link></li>
                        <li className="navLink"><Link to="/my-bookings"><a>My Bookings</a></Link></li>
                        <li className="navLink"><Link to="/my-venue-booking-info"><a>My Venue Booking Info</a></Link></li>
                    </ul>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-cog" aria-hidden="true" /> <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/settings"><a>Account Settings</a></Link></li>
                                    <li><Link to="/"><a>Logout</a></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}

export default MainNav;
