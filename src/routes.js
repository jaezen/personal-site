import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Work from './Pages/Work/Work';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/Work" component={Work} />
    </Route>
  </Router>
);

export default Routes;
