import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from "redux";
import entities from './EntityReducer';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

const combinedReducer =  combineReducers({
  entities,
  router: connectRouter(history),
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
export const store = createStore(
  combinedReducer,
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware)
)
