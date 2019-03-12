import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/LoginNav";

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
                <NavBar />
                <h1>here</h1>
            </div>
        );
    }
}

export default NoMatch;