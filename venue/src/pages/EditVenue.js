import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { updateVenue } from '../backendInterface/Venue';
import axios from "axios";


class EditVenue extends Component {


    state = {
        userID: "5c86f112e368c11a6c40a677",
        venueID: "5c8838752f2a4f0fd4be75a8",
        description: "",
        photoURL: "",
        pricePerDay: ""
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/venue/getByID/${this.state.venueID}`)
        .then(res => {
            this.setState({
                description: res.data.description, 
                photoURL: res.data.photoURL,
                pricePerDay: res.data.pricePerDay
            });
            console.log(res.data);
        });
    }

    render() {
        return (
            <Container>
                <NavBar />
                <Form>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input
                            type="text"
                            value={this.state.description}
                            onChange={(event) => {
                                this.setState({description: event.target.value})
                                }
                            }
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Photo URL</Label>
                        <Input
                            type="text"
                            value={this.state.photoURL}
                            onChange={(event) => {
                                this.setState({photoURL: event.target.value})
                                }
                            }
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>$/Day</Label>
                        <Input
                            type="text"
                            value={this.state.pricePerDay}
                            onChange={(event) => {
                                this.setState({pricePerDay: event.target.value})
                                }
                            }
                        ></Input>
                    </FormGroup>
                    <Button
                        type="submit"
                        onClick={() => {
                            updateVenue(this.state.venueID, this.state.description, this.state.pricePerDay, this.state.photoURL);
                        }}
                    >
                    Save
                    </Button>
                </Form>
                
            </Container>
        );
    }
}

export default EditVenue;
