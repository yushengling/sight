import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import promisePlusMiddleware from 'redux-promise-plus';
import { ConnectedRouter, routerReducer } from 'react-router-redux';
import routeConfig from './router';
import homeRedu from './reducers/HomeRedu';

const history = createBrowserHistory();

const store = createStore(
    combineReducers({
        homeRedu,
        router: routerReducer,
    }),
    applyMiddleware(promisePlusMiddleware),
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routeConfig}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
