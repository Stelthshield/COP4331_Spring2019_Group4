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
                <h1>Error 404</h1>  
                <h2>Sorry, we couldn't find the page you were looking for :'(</h2>
            </div>
        );
    }
}

export default NoMatch;