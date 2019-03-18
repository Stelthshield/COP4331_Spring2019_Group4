import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {unbookVenue } from '../backendInterface/Venue'
import axios from "axios";

function* entries(obj) {
    for (let key in obj)
        yield [key, obj[key]];
}

class MyBookings extends Component{
    state = {
        bookings: [],
        date: new Date(),
        userID: "5c86f112e368c11a6c40a677"
    }

    
    componentDidMount() {
        const userID = "5c86f112e368c11a6c40a677";
        axios.get('http://localhost:5000/api/venue/')
        .then((res) => {
            let arr = [];
            for (let venue of res.data)
            {
                let bookings = new Map(entries(venue.bookings));
                for (let date of bookings.keys())
                {
                    console.log("hello world");
                    if (bookings.get(date) == userID)
                    {
                        console.log(userID);
                        console.log("test");
                        arr.push({
                            "date": date,
                            "venueID": venue._id,
                            "zipCode": venue.zipCode,
                            "streetAddress": venue.streetAddress
                        });
                    }
                }
            }
            console.log(arr);
            this.setState({bookings: arr});
        });
    }

    onChange = date => this.setState({ date })

    handleInputChange = event => {
        this.componentDidMount();
    };

    render() {
        const { bookings } = this.state;
        return (
            <Container>
            <NavBar></NavBar>
                <ListGroup>
                    <TransitionGroup className="venue-list">                    
                        {bookings.map(({ date, zipCode, streetAddress, venueID}) => (
                            <ListGroupItem>
                                <Button
                                    className="book-vn"
                                    color="danger"
                                    onClick={() => {
                                        unbookVenue(venueID, date);
                                        this.componentDidMount();
                                    }}

                                    >
                                    Unbook
                                </Button>
                                {date} --- {streetAddress} {zipCode}
                            </ListGroupItem>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}


export default MyBookings;
