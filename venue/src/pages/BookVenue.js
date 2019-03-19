import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatePicker from 'react-date-picker';
import { getVenues, bookVenue } from '../backendInterface/Venue'
import axios from "axios";

class BookVenue extends Component {

    state = {
        venues: [],
        date: new Date(),
        userID: "5c86f112e368c11a6c40a677"
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
                                <Button
                                    className="book-vn"
                                    color="success"
                                    onClick={() => {
                                        let date = `${this.state.date.getMonth()} ${this.state.date.getDate()} ${this.state.date.getFullYear()}`;
                                        bookVenue(_id, date, this.state.userID);
                                    }}
                                    >
                                    Book
                                </Button>
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
