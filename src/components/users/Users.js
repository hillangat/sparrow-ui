import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import userActions from '../../reduxSaga/actions/users'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import {AgGridReact} from 'ag-grid-react'
import {Col, Row} from 'react-bootstrap'
import DeleteCellRenderer from '../renderers/DeleteCellRenderer'
import SparrowDialog from '../common/SparrowDialog'

class Users extends Component {

    constructor(props) {
        super(props)
        this.setState({
            dialogOpened: false
        })
    }

    componentDidMount() {
        const {getUsers} = this.props
        getUsers()
    }

    confirmDeleteUser ({dialogOpened = false, userIdToDelete = undefined}) {
        const {confirmDeleteUser} = this.props
        confirmDeleteUser({dialogOpened, userIdToDelete})
    }

    deleteUser ({dialogOpened = false, userIdToDelete = undefined}) {
        this.confirmDeleteUser({dialogOpened, userIdToDelete})
        console.log('Confirmed delete of user......')
    }

    renderGrid = () => {
        const {rowData, colDefs, dialogOpened} = this.props
        return (
            <div>
                <button onClick={() => this.confirmDeleteUser({dialogOpened: true, userIdToDelete: undefined})}>Open Dialog</button>
                <SparrowDialog
                    onClose={() => this.confirmDeleteUser({dialogOpened: false})}
                    onConfirm={userId => this.confirmDeleteUser({dialogOpened: false, userIdToDelete: userId})}
                    title={'Delete User'}
                    message={'Are you sure you want to Delete User?'}
                    closeText = 'Close'
                    confirmText = 'Yes'
                    dialogOpened = {dialogOpened}
                />
                <Row>
                    <Col lg={8} xs={12} md={8} mdOffset={4} lgOffset={4}>
                        <div className='ag-theme-balham grid-container'>
                            <AgGridReact
                                context={{onDelete: params => this.deleteUser(params)}}
                                paginationAutoPageSize={true}
                                pagination={true}
                                enableSorting={true}
                                enableFilter={true}
                                debug={true}
                                pivotPanelShow={'always'}
                                enableColResize={true}
                                enableRangeSelection={true}
                                rowSelection={false}
                                columnDefs={colDefs}
                                rowData={rowData}>
                            </AgGridReact>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    renderFailed = () => {
        return (
            <div>
                Error occurred!!
            </div>
        )
    }

    render() {
        const {status} = this.props
        return (
            <div className='Login'>
                {status !== 'failed' ? this.renderGrid() : this.renderFailed()}
            </div>
        )
    }
}

export default connect(
    state => {
        console.log(state)
        return {
            status: state.users.status,
            message: state.users.message,
            rowData: state.users.rowData,
            colDefs: state.users.colDefs,
            userIdToDelete: state.users.userIdToDelete,
            dialogOpened: state.users.dialogOpened
        }
    },
    dispatch => bindActionCreators({
        getUsers: userActions.getUsers,
        confirmDeleteUser: userActions.confirmDeleteUser
    }, dispatch)
)(Users)