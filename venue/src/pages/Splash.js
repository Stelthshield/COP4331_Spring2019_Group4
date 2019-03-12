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
                {/* put venue logo here */}
                <Link to="/create-account"><button type="button" className="btn btn-success">Create Account</button></Link>
                
            </div>
        );
    }
}

export default NoMatch;