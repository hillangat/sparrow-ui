import React, {Component} from "react"
import {Modal, Button} from 'react-bootstrap'

export default class SparrowDialog extends Component {

    render () {

        const {
            title,
            message,
            onClose,
            onConfirm,
            closeText = 'No',
            confirmText = 'Yes',
            dialogOpened = false
        } = this.props

        console.log('Properties >>> ', this.props)

        return (
            <div className="static-modal" style={{display: dialogOpened ? 'show' : 'none'}}>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>{message}</Modal.Body>

                    <Modal.Footer>
                        <Button onClick={e => onClose(e)} >{closeText}</Button>
                        <Button onClick={e => onConfirm(e)} bsStyle="primary">{confirmText}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }

}