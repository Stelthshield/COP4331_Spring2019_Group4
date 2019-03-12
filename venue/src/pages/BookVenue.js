import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/MainNav";

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
            </div>
        );
    }
}

export default NoMatch;