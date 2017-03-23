import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Work from './Pages/Work/Work';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import Connect from './Pages/Connect/Connect';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/Work" component={Work} />
      <Route path="/Services" component={Services} />
      <Route path="/Blog" component={Blog} />
      <Route path="/Connect" component={Connect} />
    </Route>
  </Router>
);

export default Routes;
