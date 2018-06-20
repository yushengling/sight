import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { routeConfig } from './router';
import createSagaMiddleware from 'redux-saga';
import homeRedu from './reducers/HomeRedu';
import userRedu from './reducers/UserRedu';
import personalRedu from './reducers/PersonalRedu';
import settingRedu from './reducers/SettingRedu';

import homeSaga from './sagas/HomeSaga';
import userSaga from './sagas/UserSaga';
import personalSaga from './sagas/PersonalSaga';
import settingSaga from './sagas/SettingSaga';
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
// const middleware = routerMiddleware(history);
const store = createStore (
  combineReducers({
    homeRedu,
    userRedu,
    personalRedu,
    settingRedu,
    router: routerReducer
  }),
  // applyMiddleware(middleware)
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(homeSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(personalSaga);
sagaMiddleware.run(settingSaga);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div style={{height: '100%'}}>
        {routeConfig}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);