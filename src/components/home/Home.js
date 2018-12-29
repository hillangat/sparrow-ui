import React, {Component} from "react"

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currLocation: ""
        };
    }

    render() {
        return (
            <div>
                <h1>Home Page!!</h1>
            </div>
        );
    }
}