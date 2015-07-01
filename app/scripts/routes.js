import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import HomeViz from './pages/viz/vizHome.jsx';
import DealsViz from './pages/viz/vizDeals.jsx';
import DataViz from './pages/viz/dataViz.jsx';
import InvestorsViz from './pages/viz/vizInvestors.jsx';
import SearchViz from './pages/viz/vizSearch.jsx';
import AnalysisViz from './pages/viz/vizAnalysis.jsx';
import SettingsViz from './pages/viz/vizSettings.jsx';
import LibraryViz from './pages/viz/vizLibrary.jsx';
import GlossaryViz from './pages/viz/vizGlossary.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';

var routes = (
  <Route name="app" path="/" handler={ App }>
    <Route name="info" handler={ Info } />
    <Route name="dataViz" handler={ DataViz } />
    <Route name="home" handler={ HomeViz } />
    <Route name="deals" handler={ DealsViz } />
    <Route name="investors" handler={ InvestorsViz } />
    <Route name="search" handler={ SearchViz } />
    <Route name="analysis" handler={ AnalysisViz } />
    <Route name="settings" handler={ SettingsViz } />
    <Route name="library" handler={ LibraryViz } />
    <Route name="glossary" handler={ GlossaryViz } />
    <DefaultRoute handler={ HomeViz } />
    <NotFoundRoute handler={ NotFound } />
  </Route>
);

export default routes;