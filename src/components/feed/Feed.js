import React, {Component} from 'react'

export default class Feed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currLocation: ""
        };
    }

    render() {
        return (
            <div>
                <h1>Feeds Page!!</h1>
            </div>
        );
    }
}