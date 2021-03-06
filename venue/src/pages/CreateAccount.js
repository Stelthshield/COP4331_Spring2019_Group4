import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/LoginNav";
import axios from "axios";

class CreateAccount extends Component {

    state = {
        name: "",
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
                <h1>Create Account</h1>
                <div>

                    <form>
                    <div className="row">
                            <label>Name</label>
                        </div>
                        <input
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                        />
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
                                    onClick={() => {
                                        axios.post("http://localhost:5000/api/user", {
                                            name: this.state.name,
                                            password: this.state.password,
                                            email: this.state.email
                                        })
                                    }}
                                >
                                    Submit
                            </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateAccount;
