import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '@/scenes/App';
import AboutUs from '@/scenes/AboutUs';
import Home from '@/scenes/Home';
import Error404 from '@/scenes/Error404';
import Login from '@/scenes/Sign/scenes/Login';
import RequireAuth from '@/components/auth/RequireAuth';
import Dashboard from '@/scenes/Dashboard';

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute title="Home" component={Home} />
            <Route path="about-us" title="About Us" component={AboutUs} />
            <Route path="login" title="Login" component={Login} />
            <Route path="dashboard" title="Dashboard" component={RequireAuth(Dashboard)} />
        </Route>
        <Route path="*" component={Error404} status={404} />
    </Router>
);
