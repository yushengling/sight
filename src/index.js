import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer } from 'react-router-redux';
import routeConfig from './router';
import homeRedu from './reducers/HomeRedu';

const history = createBrowserHistory();

function middleware({ getState, dispatch }) {
    return (next) => (action) => {
        console.log(action)
        next(action);
        return new Promise((resolve, reject) => {
            action.type = action.type + 'success';
            action.data = {'a': '123'};
            next(action);
        });
    };
}

const store = createStore(
    combineReducers({
        homeRedu,
        router: routerReducer,
    }),
    applyMiddleware(middleware),
);

store.dispatch({
    type: 'ADD_TODO',
    data: {},
});
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routeConfig}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
