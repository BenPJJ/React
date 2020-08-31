import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import mySagas from './sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

// store只是一个仓库，它并没有管理能力，它会把接收到的action自动转发给reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(
  reducer,
  enhancer
);
sagaMiddleware.run(mySagas);

export default store;