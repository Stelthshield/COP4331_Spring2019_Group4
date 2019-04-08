import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { createVenue } from '../backendInterface/Venue'


class ListVenue extends Component {


    state = {
        zipCode: "",
        streetAddress: "",
        pricePerDay: "",
        userID: this.props.location.userID
    }


    render() {
        return (
            <Container>
                <NavBar />
                <Form style={{paddingTop: "20px"}}>
                    <FormGroup>
                        <Label>Zip Code</Label>
                        <Input
                            type="text"
                            value={this.state.zipCode}
                            placeholder="Required"
                            onChange={(event) => {
                                this.setState({zipCode: event.target.value})
                                }
                            }
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Street Address</Label>
                        <Input
                            type="text"
                            value={this.state.streetAddress}
                            placeholder="Required"
                            onChange={(event) => {
                                this.setState({streetAddress: event.target.value})
                                }
                            }
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Price Per Day</Label>
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
                            createVenue(this.state.userID, this.state.zipCode, this.state.streetAddress, this.state.pricePerDay);
                        }}
                    >
                    List Venue
                    </Button>
                </Form>
                
            </Container>
        );
    }
}

export default ListVenue;
