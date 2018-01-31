import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Welcome from './containers/Welcome';
import Dashboard from './containers/Dashboard';
import NotFoundError from './components/NotFoundError';
import Help from './containers/Help';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/help" component={Help} />
        <Route path="*" component={NotFoundError} />
    </Route>
);