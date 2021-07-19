import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './ducks';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
