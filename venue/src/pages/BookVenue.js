import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatePicker from 'react-date-picker';
import { getVenues, bookVenue, bookVenuePayment } from '../backendInterface/Venue'
import axios from "axios";
import Popup from "reactjs-popup";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class BookVenue extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            venues: [],
            date: new Date(),
            userID: "5c86f112e368c11a6c40a677",
            dropdownOpen: false   
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/venue')
        .then(res => {
            this.setState({venues: res.data});
            console.log(res.data);
        });
    }

    onChange = date => this.setState({ date })

    handleInputChange = event => {
        axios.get('http://localhost:5000/api/venue')
        .then(res => {
            this.setState({venues: res.data});
            console.log(res.data);
        });
    };
    
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const { venues } = this.state;
        return (
            <Container>
            <NavBar/>
                <DatePicker
                    className="date-pckr"
                    onChange={this.onChange}
                    value={this.state.date}
                />
                <ListGroup>
                    <TransitionGroup className="venue-list">                    
                        {venues.map(({ zipCode, streetAddress, _id}) => (
                            <ListGroupItem>
                            <Popup 
                                className="book-vn"
                                color="success"
                                trigger={<button>Book</button>} 
                                position="center center" modal>
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
                                                let date = 
                                                `${this.state.date.getMonth()} 
                                                ${this.state.date.getDate()} 
                                                ${this.state.date.getFullYear()}`;
                                                let cardType = "Visa";
                                                let cardNumber = document.getElementsByName("cardNumber")[0].value;
                                                let expDate = document.getElementsByName("expirationDate")[0].value;
                                                let CVV = document.getElementsByName("CVV")[0].value;
                                                let cardHolderName = document.getElementsByName("cardHolderName")[0].value;

                                                bookVenue(_id, date, this.state.userID);
                                                //bookVenuePayment(_id, date, this.state.userID, cardType, cardNumber, expDate, CVV, cardHolderName);
                                            }}
                                        >
                                        Confirm Payment
                                        </Button>
                                    </div>
                                </Container>
                            </Popup>

                                {streetAddress} {zipCode} {this.state.date.toString()}
                            </ListGroupItem>
                            
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default BookVenue;
