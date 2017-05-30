import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Routes from '@/routes';
import reducers from '@/reducers';
import { configureAxios } from '@/services/session';

// Make the Promise API available to older browsers
import 'babel-polyfill';

// handle taps and clicks nicely
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const composeEnhancers = composeWithDevTools({});
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk)));

configureAxios(store);

ReactDOM.render(
    <Provider store={store}>
        {Routes}
    </Provider>
    , document.getElementById('app'));
