import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";
import { Container, ListGroup, ListGroupItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { loginUser } from '../backendInterface/User'
import { Redirect } from 'react-router';
import axios from "axios";

class LoginAccount extends Component {

    state = {
        name: "",
        password: "",
        redirect: false
    }

    render() {
        if(this.state.redirect === true) {
            return <Redirect to ="/home"/>
        }
        return (
                <Container>
                <NavBar />
                <Form style={{paddingTop: "20px"}}>
                    <FormGroup>
                        <Label>User Name</Label>
                        <Input
                            type="text"
                            value={this.state.name}
                            placeholder="Required"
                            onChange={(event) => {
                                this.setState({name: event.target.value})
                                }
                            }
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type="text"
                            value={this.state.password}
                            placeholder="Required"
                            onChange={(event) => {
                                this.setState({password: event.target.value})
                                }
                            }
                        ></Input>
                    </FormGroup>
                    <Button
                        type="submit"
                        onClick={() => {
                        console.log(axios.post('http://localhost:5000/api/user/auth-user', {
                            "name": this.state.name,
                            "password": this.state.password
                            if(res.body.success)
                                this.setState([redirect: true]);
                            else
                                this.setState([redirect: false]);
                        }))
                            
                        }}
                    >
                    Login
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default LoginAccount;
