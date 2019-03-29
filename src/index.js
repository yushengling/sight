import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer } from 'react-router-redux';
import routeConfig from './router';
import homeRedu from './reducers/HomeRedu';

const history = createBrowserHistory();
// const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        homeRedu,
        router: routerReducer,
    }),
    // applyMiddleware(sagaMiddleware),
);
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routeConfig}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
