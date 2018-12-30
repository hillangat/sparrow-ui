import React, {Component} from "react"
import { Link } from 'react-router-dom'

export default class PageNotFound extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currLocation: ""
        };
    }

    render() {
        return (
            <div>
                <h1>Error: Page Not Found!</h1><br/>
                <h2><Link  to={"/"}>Go Home</Link></h2>
            </div>
        );
    }
}