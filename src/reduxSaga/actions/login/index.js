import {LOGIN, LOGOUT, ON_CHANGE} from "./types";

export const login = (payload) => ({type: LOGIN, payload})
export const logout = (payload) => ({type: LOGOUT, payload})
export const onChange = (payload) => ({type: ON_CHANGE, payload})