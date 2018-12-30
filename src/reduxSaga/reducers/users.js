import {STATUS_NEUTRAL} from '../../constants'
import userTypes from '../actions/users/types'
import handleActions from 'redux-actions/es/handleActions'
import DeleteCellRenderer from '../../components/renderers/DeleteCellRenderer'

const defaultState = {
    dialogOpened: false,
    userIdToDelete: undefined,
    rowData: [],
    colDefs: [
        {headerName: 'ID', field: 'userId'},
        {headerName: 'First Name', field: 'firstName'},
        {headerName: 'Last Name', field: 'lastName'},
        {headerName: 'Email', field: 'email'},
        {headerName: 'Active', field: 'active'},
        {headerName: 'User Name', field: 'userName'},
        {headerName: 'Created On', field: 'createDate'},
        {headerName: 'Created By', field: 'createdBy'},
        {headerName: 'Last Update', field: 'lastUpdate'},
        {headerName: 'Updated By', field: 'updatedBy'},
        {headerName: 'Delete', fileName: 'Delete', cellRendererFramework: DeleteCellRenderer}
    ]
}

export default handleActions (
    {
        [userTypes.GET_USERS_SUCCESS]: (state, action ) => {
            const {status = STATUS_NEUTRAL, message = undefined, data = []} = action.payload
            console.log('Confirming delete of user : ', action.payload)
            const newState = {...state, status, message, rowData: data}
            console.log('Confirming delete of new state : ', newState)
            return newState
        },
        [userTypes.CONFIRM_DELETE_USER]: (state, action ) => {
            const {dialogOpened = false} = action.payload
            console.log('Confirming delete of user : ', action.payload)
            const newState = {...state, dialogOpened}
            console.log('Confirming delete of new state : ', newState)
            return newState
        }
    },
    defaultState
);