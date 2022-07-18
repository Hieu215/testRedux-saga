import { applyMiddleware, createStore } from 'redux';
import rootSaga from '~/sagas';
import rootReducer from '~/reducer';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
