import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reduxSaga/reducers";
import saga from "./reduxSaga/sagas";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

// run the saga
sagaMiddleware.run(saga);

export default store;
