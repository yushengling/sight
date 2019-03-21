import React from 'react';
import Home from './pages/Home/index';
import Modal from './pages/Modal/index';
import VerificationCode from './pages/VerificationCode/index';
import Preview from './pages/Preview/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/modal",
    component: Modal
  },
  {
    path: "/verificationCode",
    component: VerificationCode
  },
  {
    path: "/preview",
    component: Preview
  }
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const routeConfig = routes.map((route, i) => {
  return <RouteWithSubRoutes key={i} {...route} />
});
export { routeConfig };