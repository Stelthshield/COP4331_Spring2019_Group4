import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { deleteVenue } from '../backendInterface/Venue'
import axios from "axios";

function* entries(obj) {
    for (let key in obj)
        yield [key, obj[key]];
}

class MyVenues extends Component{
    state = {
        venues: [],
        userID: "5c86f112e368c11a6c40a677"
    }

    
    componentDidMount() {
        const userID = "5c86f112e368c11a6c40a677";
        axios.get('http://localhost:5000/api/venue/getByQuery', {"ownerID": userID})
        .then((res) => {
            this.setState({venues: res.data});
        })
        .catch(err => {alert(err)});
    }


    handleInputChange = event => {
        this.componentDidMount();
    };

    render() {
        const { venues } = this.state;
        return (
            <Container>
            <NavBar></NavBar>
                <ListGroup>
                    <TransitionGroup className="venue-list">                    
                        {venues.map(({zipCode, streetAddress, _id}) => (
                            <ListGroupItem>
                                <Button
                                    className="book-vn"
                                    color="danger"
                                    onClick={() => {
                                        deleteVenue(_id);
                                        this.componentDidMount();
                                    }}
                                    >
                                    Delete
                                </Button>
                                 {streetAddress} {zipCode}
                                 <Link to={{
                                    pathname: "/view-venue",
                                    venueID: _id
                                 }}>
                                    <Button style={{ marginLeft: "35rem" }}>
                                        View
                                    </Button>
                                </Link>
                                <Link to={{
                                    pathname: "/edit-venue",
                                    venueID: _id
                                 }}>
                                    <Button style={{ marginLeft: "0.5rem" }}>
                                        Edit
                                    </Button>
                                </Link>
                            </ListGroupItem>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}


export default MyVenues;
