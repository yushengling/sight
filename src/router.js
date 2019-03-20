import React from 'react';
import Home from './pages/Home/index';
import User from './pages/User/index';
import Detail from './pages/Detail/index';
import Personal from './pages/Personal/index';
import Setting from './pages/Setting/index';
import PhonePasswordChange from './components/Setting/PhonePasswordChange';
import Post from './pages/Post/index';
import PostDetail from './pages/PostDetail/index';
import Modal from './pages/Modal/index';
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