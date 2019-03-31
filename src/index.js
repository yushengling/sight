import React from 'react';
import isPromise from 'is-promise';
import { isFSA } from 'flux-standard-action';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer } from 'react-router-redux';
import routeConfig from './router';
import homeRedu from './reducers/HomeRedu';

const history = createBrowserHistory();
function middleware({ dispatch }) {
    return next => action => {
        if (!isFSA(action)) {
            return next(action);
        }
        if(isPromise(action.payload)) {
            dispatch({ ...action, payload: '', isLoading: true });
            return action.payload
                .then(result => dispatch({ ...action, payload: result, isLoading: false }))
                .catch(error => dispatch({ ...action, payload: error, error: true, isLoading: false }));
        }
        return next(action);
    };
}

const store = createStore(
    combineReducers({
        homeRedu,
        router: routerReducer,
    }),
    applyMiddleware(middleware),
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routeConfig}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
