import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'
import '../../App.css';


export default class SparrowDialog extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    }

    render() {

        const {
            title,
            message,
            closeText = 'No',
            confirmText = 'Yes',
            dialogOpened = false
        } = this.props

        return (
            <Modal
                animation={true}
                show={this.state.show}
                onHide={() => this.handleHide()}
                container={this}
                aria-labelledby='contained-modal-title'
            >
                <Modal.Header>
                    <Modal.Title id='contained-modal-title'>
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        {message}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.handleHide()}>{closeText}</Button>
                    <Button onClick={() => this.handleHide()}>{confirmText}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
