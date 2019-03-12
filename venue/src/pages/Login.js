import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/LoginNav";

class NoMatch extends Component {

    state = {
        email: "",
        password: ""
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
                <h1>Login</h1>
                <div>

                    <form>
                        <div className="row">
                            <label>Email</label>
                        </div>
                        <input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                        />
                        <div className="row">
                            <label>Password</label>
                        </div>
                        <input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                        />
                        <div className="row">
                            <div id="btnContainer">
                                <button
                                    className="btn btn-success"
                                    id="button-login"
                                    disabled={!(this.state.email) || !(this.state.password)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Login
                            </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NoMatch;