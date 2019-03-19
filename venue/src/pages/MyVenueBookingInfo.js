import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { unbookVenue } from '../backendInterface/Venue'
import axios from "axios";

function* entries(obj) {
    for (let key in obj)
        yield [key, obj[key]];
}
class MyVenueBookingInfo extends Component {
    state = {
        venues: [],
        bookings: [],
        userID: "5c86f112e368c11a6c40a677"
    }


    componentDidMount() {
        const userID = "5c86f112e368c11a6c40a677";
        axios.get('http://localhost:5000/api/venue/getByQuery', { "ownerID": userID })
            .then((res) => {
                this.setState({ venues: res.data });
                let arr = [];
                for (let venue of this.state.venues) {
                    let bookings = new Map(entries(venue.bookings));
                    console.log(bookings);
                    for (let date of bookings.keys()) {
                        axios.get(`http://localhost:5000/api/user/getByQuery`, { "_id": bookings.get(date) })
                            .then((res2) => {
                                arr.push({
                                    "venueID": venue._id,
                                    "zipCode": venue.zipCode,
                                    "streetAddress": venue.streetAddress,
                                    "date": date,
                                    "userName": res2.data[0].name
                                });
                                this.setState({ bookings: arr });
                            })
                    }
                }
            })
            .catch(err => { alert(err) });

    }

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
                        {bookings.map(({ userName, zipCode, streetAddress, date, venueID }) => (
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
                                {date} --- {streetAddress} {zipCode} --- {userName}
                            </ListGroupItem>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}


export default MyVenueBookingInfo;
