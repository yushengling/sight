import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { routeConfig } from './router';
import createSagaMiddleware from 'redux-saga';
import homeRedu from './reducers/HomeRedu';

import rootSagas from './sagas/RootSagas';
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const store = createStore (
  combineReducers({
    homeRedu,
    router: routerReducer
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSagas);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{ height: '100%' }}>
        {routeConfig}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);