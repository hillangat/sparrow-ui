import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default class DeleteCellRenderer extends Component {

    onDelete () {
        const {context, data} = this.props
        if (context.onDelete) {
            context.onDelete(data)
        }
    }

    render() {
        return (
            <div>
                <FontAwesomeIcon
                    onClick={() => this.onDelete()}
                    icon='times'
                />
            </div>
        )
    }
}