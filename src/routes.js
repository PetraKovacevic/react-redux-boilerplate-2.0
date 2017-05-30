import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '@/scenes/App';
import AboutUs from '@/scenes/AboutUs';
import Home from '@/scenes/Home';
import Error404 from '@/scenes/Error404';

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute title="Home" component={Home} />
            <Route path="about-us" title="About Us" component={AboutUs} />
        </Route>
        <Route path="*" component={Error404} status={404} />
    </Router>
);
