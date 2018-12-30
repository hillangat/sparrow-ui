import {GET_METHOD, POST_METHOD} from "../constants";

export const BASE_SPARROW = 'http://localhost:8080'
export const BASE_URL = `${BASE_SPARROW}/api/`

export const urls = {
    LOGIN: {
        method: POST_METHOD,
        url: `${BASE_URL}user/login`
    },
    LOGIN_OUT: {
        method: GET_METHOD,
        url: `${BASE_URL}user/logout`
    },
    GET_USERS: {
        method: GET_METHOD,
        url: `${BASE_URL}user/0`
    }

}