import { createStore, applyMiddleware } from 'redux';
import createSagaMiddlewire from 'redux-saga';

import rootReducer from './module/rootReducer';
import rootSaga from './module/rootSaga';

const SagaMiddlewire = createSagaMiddlewire();

const store = createStore(rootReducer, applyMiddleware(SagaMiddlewire));

SagaMiddlewire.run(rootSaga);

export default store;
