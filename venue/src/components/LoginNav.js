import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Nav from 'react-bootstrap/Nav'
class LoginNav extends Component {

    render() {
        return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <ButtonToolbar
                    className="justify-content-between"
                    aria-label="Toolbar with Button groups"
                >
                 <ButtonGroup>
                    <Button variant="secondary" type="submit" size="lg" block>
                        <Link style={{color: "#FFF"}} to="/home" id="">Login</Link>
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onclick="" variant="primary" type="submit" size="lg" block>
                        <Link style={{color: "#FFF"}}to="/create-account" id="">Create Account</Link>
                    </Button>
                </ButtonGroup>
               
                
                </ButtonToolbar>
            </Form>
            
        )
    }

}

export default LoginNav;