import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatePicker from 'react-date-picker';
import { getVenues, bookVenue, bookVenuePayment, storeVenuePayment } from '../backendInterface/Venue'
import axios from "axios";
import Popup from "reactjs-popup";
import {Form, FormGroup, Label, Input} from 'reactstrap';

class BookVenue extends Component {

    state = {
            venues: [],
            date: new Date(),
            userID: "5c86f112e368c11a6c40a677",
            cardType: "",
            cardNumber: "",
            expirationDate: "",
            CVV: "",
            cardHolderName: "",
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
                                    <Form>
                                        <FormGroup>
                                            <Label for="cardType">Card Type</Label>
                                            <Input type="cardType" name="cardType"
                                            value={this.state.cardType}
                                            onChange={(event) => {
                                            this.setState({cardType: event.target.value})}}
                                            >
                                                <option>Visa</option>
                                                <option>Master Card</option>
                                                <option>American Express</option>
                                                <option>Discover</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="cardNumber">Card Number</Label>
                                            <Input type="cardNumber" name="cardNumber"
                                            value={this.state.cardNumber}
                                            onChange={(event) => {
                                            this.setState({cardNumber: event.target.value})}}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="expirationDate">Expiration Date</Label>
                                            <Input type="expirationDate" name="expirationDate" placeholder="mm/yyyy"
                                            value={this.state.expirationDate}
                                            onChange={(event) => {
                                            this.setState({expirationDate: event.target.value})}}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="CVV">CVV</Label>
                                            <Input type="CVV" name="CVV" placeholder="###"
                                            value={this.state.CVV}
                                            onChange={(event) => {
                                            this.setState({CVV: event.target.value})}}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="cardHolderName">Card Holder's Name</Label>
                                            <Input type="cardHolderName" name="cardHolderName"
                                            value={this.state.cardHolderName}
                                            onChange={(event) => {
                                            this.setState({cardHolderName: event.target.value})}}
                                            />
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
                                                bookVenue(_id, date, this.state.userID);
                                                storeVenuePayment(this.state.cardType, this.state.cardNumber, this.state.expirationDate, this.state.CVV, this.state.userID);
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
