import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/LoginNav";
import API from "../utils/API";
import { Redirect } from 'react-router';
import { isNullOrUndefined } from "util";

class NoMatch extends Component {

    state = {
        email: "",
        password: "",
        redirectHome: false,
        failedLogin: false
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log(user);
        API.authUser(user).then(res => {
            console.log(res);
            if (res == isNullOrUndefined) {
                this.setState({ failedLogin: true });
                alert("Login failed.");
            }
            else {
                this.setState({ redirectHome: true });
            }
        })
    };

    render() {
        let redirectHome = this.state.redirectHome;
        if (redirectHome) {
            console.log("about to redirect");
            return <Redirect to='/home' />;
        }
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