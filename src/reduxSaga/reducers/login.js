import {STATUS_NEUTRAL, STATUS_SUCCESS} from '../../constants'
import loginTypes from '../actions/login/types'
import handleActions from 'redux-actions/es/handleActions'

const defaultState = {
    username: '',
    password: '',
    status: STATUS_NEUTRAL,
    message: ''
}

export default handleActions (
    {
        [loginTypes.LOGIN_SUCCESS]: (state, action ) => {
            const {status = STATUS_NEUTRAL, message = undefined} = action.payload
            if (status === STATUS_SUCCESS) {
                window.location.href = '/'
            }
            return {...state, status, message}
        },
        [loginTypes.LOGOUT_SUCCESS]: (state, action ) => {
            const {status = STATUS_NEUTRAL, message = undefined} = action.payload
            return {...state, status, message}
        },
        [loginTypes.ON_CHANGE]: (state, action ) => {
            const {id, value} = action.payload
            return {...state, [id]: value}
        }
    },
    defaultState
);