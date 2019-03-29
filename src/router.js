import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Modal from './pages/Modal/index';
import VerificationCode from './pages/VerificationCode/index';
import Preview from './pages/Preview/index';
import Button from './pages/Button/index';
import Input from './pages/Input/index';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/modal',
        component: Modal,
    },
    {
        path: '/verificationCode',
        component: VerificationCode,
    },
    {
        path: '/preview',
        component: Preview,
    },
    {
        path: '/button',
        component: Button,
    },
    {
        path: '/input',
        component: Input,
    },
];

const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);

// eslint-disable-next-line react/no-array-index-key
const routeConfig = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
export default routeConfig;
