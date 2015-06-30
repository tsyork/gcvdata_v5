import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Viz from './pages/viz.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="info" handler={ Info } />
    <Route name="viz" handler={ Viz } />
    <Route name="home" handler={ Home } />
    <DefaultRoute handler={ Home } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

export default routes;