import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureAxios } from '@/services/session';
import Routes from '@/routes';
import store from '@/store';

configureAxios(store);

// Make the Promise API available to older browsers
import 'babel-polyfill';

// handle taps and clicks nicely
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        {Routes}
    </Provider>
    , document.getElementById('app'));
