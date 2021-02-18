import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import sendIt from './reducer'

export default createStore(
  combineReducers({
    sendIt
  }),
  applyMiddleware(promise, logger)
)
