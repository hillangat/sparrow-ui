import { all } from 'redux-saga/effects'
import usersSagas from "./users";
import loginSagas from "./login";

export default function* rootSaga() {
    yield all([
        usersSagas(),
        loginSagas()
    ]);
}