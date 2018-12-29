import {STATUS_NEUTRAL} from "../../constants";
import {LOGIN_SUCCESS, LOGOUT_SUCCESS, ON_CHANGE} from "../actions/login/types";

const defaultState = {
    username: "",
    password: "",
    status: STATUS_NEUTRAL,
    message: ''
}

const login = (state = {}, {type = '', payload = {}}) => {
    console.log('Payload >>> ', payload)
    const {status = STATUS_NEUTRAL, message = undefined} = payload
    let newState = defaultState
    switch (type) {
        case LOGIN_SUCCESS:
            newState = {...state, status, message}
            break;
        case LOGOUT_SUCCESS:
            newState = {...state, status, message}
            break;
        case ON_CHANGE:
            const {id, value} = payload
            newState = {...state, [id]: value}
            break;
        default:
            newState = defaultState;
            break;
    }
    return newState
}

export default login;