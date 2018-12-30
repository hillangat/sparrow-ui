import React, {Component} from "react"
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currLocation: ""
        };
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/feed">Feed</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/users">Users</Link>
                </div>
            </div>
        );
    }
}