import {call, put, takeLatest} from "redux-saga/effects";
import {urls} from "../../util/urls";
import {fetchData} from "../../util/service";
import {APPLICATION_ERROR_OCCURRED, STATUS_FAILED} from "../../constants";
import usersTypes from "../actions/users/types";

function* getUsers(action = {}) {
    try {
        const data = yield call(fetchData, {urlBean: urls.GET_USERS})
        yield put({type: usersTypes.GET_USERS_SUCCESS, payload: data})
    } catch (e) {
        console.error('Error occurred while trying to fetch users', e)
        yield put({type: usersTypes.GET_USERS_SUCCESS, payload: {status: STATUS_FAILED, message: APPLICATION_ERROR_OCCURRED}})
    }
}

export default function* usersSagas () {
    yield takeLatest(usersTypes.GET_USERS, getUsers)
}