import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatePicker from 'react-date-picker';
import { getVenues, bookVenue, bookVenuePayment } from '../backendInterface/Venue'
import axios from "axios";
import Popup from "reactjs-popup";
import {Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
                                position="center center" modal closeButton>
                                <Container>
                                    <Form>
                                        <FormGroup>
                                            <Label for="cardType">Card Type</Label>
                                            <Input type="select" name="select" id="exampleSelect">
                                                <option>Visa</option>
                                                <option>Master Card</option>
                                                <option>American Express</option>
                                                <option>Discover</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="cardNumber">Card Number</Label>
                                            <Input type="cardNumber" name="cardNumber"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="expirationDate">Expiration Date</Label>
                                            <Input type="expirationDate" name="expirationDate" placeholder="mm/yyyy"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="CVV">CVV</Label>
                                            <Input type="CVV" name="CVV"placeholder="###"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="cardHolderName">Card Holder's Name</Label>
                                            <Input type="cardHolderName" name="cardHolderName"/>
                                        </FormGroup>
                                    </Form>
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
