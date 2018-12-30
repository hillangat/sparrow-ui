import {call, put, takeEvery, takeLatest} from "redux-saga/effects";
import loginTypes from "../actions/login/types";
import {urls} from "../../util/urls";
import {fetchData} from "../../util/service";
import {APPLICATION_ERROR_OCCURRED, STATUS_FAILED} from "../../constants";

function* login(action = {}) {
    const {payload: {username, password}} = action
    try {
        const data = yield call(fetchData, {urlBean: urls.LOGIN, data: {username, password}})
        yield put({type: loginTypes.LOGIN_SUCCESS, payload: data})
    } catch (e) {
        console.error('Error occurred while trying to login', e)
        yield put({type: loginTypes.LOGIN_SUCCESS, payload: {status: STATUS_FAILED, message: APPLICATION_ERROR_OCCURRED}})
    }
}

function* logout(action = {}) {
    try {
        const data = yield call(fetchData, {urlBean: urls.LOGIN_OUT, data: undefined})
        yield put({type: loginTypes.LOGOUT_SUCCESS, payload: data})
    } catch (e) {
        console.log('Error occurred >>>>>>>>>>>>>> ', e)
        yield put({type: loginTypes.LOGOUT_SUCCESS, payload: {status: STATUS_FAILED, message: APPLICATION_ERROR_OCCURRED}})
    }
}

export default function* loginSagas () {
    yield takeEvery(loginTypes.LOGIN, login);
    yield takeLatest(loginTypes.LOGOUT, logout);
}