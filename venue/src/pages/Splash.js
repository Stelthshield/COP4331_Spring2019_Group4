import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/LoginNav";
import logo from './Venue Logo V1.png';

class NoMatch extends Component {

    state = {

    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            
            <div className="container">
                <div className="logo">
                    <img src={logo} />
                </div>
                <NavBar/>
            </div>
        );
    }
}

export default NoMatch;