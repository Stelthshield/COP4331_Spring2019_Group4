import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { bookVenue } from '../backendInterface/Venue';
import axios from "axios";
import DatePicker from 'react-date-picker';
import Popup from "reactjs-popup";


class ViewVenue extends Component {


    state = {
        userID: "5c86f112e368c11a6c40a677",
        venueID: this.props.location.venueID,
        venue: {},
        date: new Date()
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/venue/getByID/${this.state.venueID}`)
            .then(res => {
                this.setState({
                    venue: res.data
                });
                console.log(res.data);
            });
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <Container>
                <NavBar />
                <h1>
                    {this.state.venue.streetAddress} {this.state.venue.zipCode}
                </h1>
                <img
                    src={this.state.venue.photoURL}
                />
                <h3>
                    Description:
                </h3>
                <p>
                    {this.state.venue.description}
                </p>
                <h3>
                    Price Per Day
                </h3>
                <p>
                    ${this.state.venue.pricePerDay}
                </p>

                <DatePicker
                    className="date-pckr"
                    onChange={this.onChange}
                    value={this.state.date}
                />
                <div
                    padding-left="1rem"
                >
                    <Popup
                        className="book-vn"
                        color="success"
                        trigger={<Button color="success">Book</Button>}
                        position="center center" modal>
                        <Container>
                            <Form>
                                <FormGroup>
                                    <Label for="cardType">Card Type</Label>
                                    <Input type="cardType" name="cardType"
                                        value={this.state.cardType}
                                        onChange={(event) => {
                                            this.setState({ cardType: event.target.value })
                                        }}
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
                                            this.setState({ cardNumber: event.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="expirationDate">Expiration Date</Label>
                                    <Input type="expirationDate" name="expirationDate" placeholder="mm/yyyy"
                                        value={this.state.expirationDate}
                                        onChange={(event) => {
                                            this.setState({ expirationDate: event.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="CVV">CVV</Label>
                                    <Input type="CVV" name="CVV" placeholder="###"
                                        value={this.state.CVV}
                                        onChange={(event) => {
                                            this.setState({ CVV: event.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="cardHolderName">Card Holder's Name</Label>
                                    <Input type="cardHolderName" name="cardHolderName"
                                        value={this.state.cardHolderName}
                                        onChange={(event) => {
                                            this.setState({ cardHolderName: event.target.value })
                                        }}
                                    />
                                </FormGroup>
                            </Form>
                            <div className="row">
                                <Button
                                    className="confirm-Payment"
                                    color="success"
                                    onClick={() => {
                                        let date = `${this.state.date.getMonth()} ${this.state.date.getDate()} ${this.state.date.getFullYear()}`;
                                        bookVenue(this.state.venueID, date, this.state.userID);
                                        //storeVenuePayment(this.state.cardType, this.state.cardNumber, this.state.expirationDate, this.state.CVV, this.state.userID);
                                    }}
                                >
                                    Confirm Payment
                                        </Button>
                            </div>
                        </Container>
                    </Popup>
                </div>
            </Container>
        );
    }
}

export default ViewVenue;
