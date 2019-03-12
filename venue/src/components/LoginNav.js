import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginNav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className="navLink" ><Link to="/" id=""><a>Back</a></Link></li>
                        <li className="navLink"><Link to="/login"><a>Login</a></Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default LoginNav;