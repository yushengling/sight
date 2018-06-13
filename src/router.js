import React from 'react';
import Home from './pages/Home/index';
import User from './pages/User/index';
import Details from './pages/Details/index';
import Personal from './pages/Personal/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const routes = [
  {
    path: "/",
    component: Personal
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/details",
    component: Details
  },
  {
    path: "/personal",
    component: Personal
  },
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