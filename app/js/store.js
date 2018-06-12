'use strict';

import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import { createHashHistory } from 'history'
import {reducer} from './reducers'
import { epics } from './epics';

const history = createHashHistory()
const middleware = []
middleware.push(routerMiddleware(history))
middleware.push(createEpicMiddleware(epics))
middleware.push(logger);

const reducers = combineReducers({page: reducer, router: routerReducer});

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

export default store;