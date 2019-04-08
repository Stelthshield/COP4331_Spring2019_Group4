import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


class LoginNav extends Component {
    render() {
        return (
            <Form>
            <ButtonToolbar>
                    <Button variant="primary" type="submit" href="/login" size="lg" block>
                        Login
                    </Button>
                    <Button variant="primary" type="submit" href="/create-account" size="lg" block>
                        Create Account
                    </Button>
            </ButtonToolbar>
            </Form>
            
        )
    }

}

export default LoginNav;