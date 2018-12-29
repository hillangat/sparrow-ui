import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {LOGIN, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS} from "../actions/login/types";
import {urls} from "../../util/urls";
import {fetchData} from "../../util/service";
import {APPLICATION_ERROR_OCCURRED, STATUS_FAILED} from "../../constants";

export function* login(action = {}) {
    const {payload: {username, password}} = action
    try {
        const data = yield call(fetchData, {urlBean: urls.LOGIN, data: {username, password}})
        yield put({type: LOGIN_SUCCESS, payload: data})
    } catch (e) {
        console.error('Error occurred while trying to login', e)
        yield put({type: LOGIN_SUCCESS, payload: {status: STATUS_FAILED, message: APPLICATION_ERROR_OCCURRED}})
    }
}

export function* logout(action = {}) {
    try {
        const data = yield call(fetchData, {urlBean: urls.LOGIN_OUT, data: undefined})
        yield put({type: LOGOUT_SUCCESS, payload: data})
    } catch (e) {
        yield put({type: LOGOUT_SUCCESS, payload: {status: STATUS_FAILED, message: APPLICATION_ERROR_OCCURRED}})
    }
}

export function* watchLoginActions () {
    yield takeEvery(LOGIN, login)
    yield takeLatest(LOGOUT, logout)
}