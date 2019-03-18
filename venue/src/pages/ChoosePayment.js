import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getVenues, bookVenue } from '../backendInterface/Venue'
import axios from "axios";

export default class ChoosePayment extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <Container>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Card Type
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Visa</DropdownItem>
                        <DropdownItem>Master Card</DropdownItem>
                        <DropdownItem>American Express</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <form>
                    <div className="row">
                        <label>Card Number</label>
                    </div>
                    <input
                        value={this.state.cardNumber}
                        onChange={this.handleInputChange}
                        name="cardNumber"
                    />

                    <div className="row">
                        <label>Expiration Date</label>
                    </div>
                    <input
                        value={this.state.expirationDate}
                        onChange={this.handleInputChange}
                        name="expirationDate"
                    />

                    <div className="row">
                        <label>CVV</label>
                    </div>
                    <input
                        value={this.state.CVV}
                        onChange={this.handleInputChange}
                        name="CVV"
                    />

                    <div className="row">
                        <label>Card Holder's Name</label>
                    </div>
                    <input
                        value={this.state.cardHolderName}
                        onChange={this.handleInputChange}
                        name="cardHolderName"
                    />
                </form>
                <div className="row">
                    <Button
                        className="confirm-Payment"
                        color="success"
                        onClick={() => {
                            //Book Venue call API
                        }}
                    >
                    Confirm Payment
                    </Button>
                </div>
            </Container>
        )
    }
}