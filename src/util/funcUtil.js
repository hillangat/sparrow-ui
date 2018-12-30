import {STATUS_FAILED, STATUS_SUCCESS} from '../constants';
import {reduce, set, values} from 'lodash'

export function isSuccess(response) {
    return response && response.status &&
        response.status === STATUS_SUCCESS
}

export function getStatusClass( status ) {
    switch (status) {
        case STATUS_SUCCESS: return 'statusSuccess';
        case STATUS_FAILED: return 'statusFailed';
        default: return ''
    }
}

export function createActionName (type) {

    type = type.toLowerCase()

    const name = type.split('_').map((e, i) => {
        if (i === 0) {
            return e
        }
        const start = e.substr(0, 1)
        const end = e.substr(1, e.length)
        const whole = start.toUpperCase() + end.toLowerCase()
        return whole
    }).join('')

    return name
}

export function createActions (types = {}) {
    const actions = reduce(values(types), (result, type, key) => {
        const funcName = createActionName(type)
        set(result, funcName, payload => ({type, payload}))
        return result
    }, {})
    return actions
}