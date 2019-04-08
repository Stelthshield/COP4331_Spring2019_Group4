import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
class MainNav extends Component {

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Venues" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/list-venue">List a Venues</NavDropdown.Item>
                    <NavDropdown.Item href="/book-venue">Book a Venue</NavDropdown.Item>
                    <NavDropdown.Item href="/my-venues">Show My Venues</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Bookings" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/my-bookings">Check on a Booking</NavDropdown.Item>
                    <NavDropdown.Item href="/my-venue-booking-info">Information about your Booked Venues</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default MainNav;
