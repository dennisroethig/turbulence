window.__CLIENT__ = true;
window.__SERVER__ = false;

import 'babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';

// import { history } from 'react-router/lib/BrowserHistory';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Router from 'react-router';

import Application from '../shared/components/handlers/Application';
import getReduxStore from '../shared/utils/getReduxStore';
import * as reducers from '../shared/reducers';

import routes from '../shared/routes';

// const history = new History;
const state = window.__initialState;
const store = getReduxStore(reducers, state);

React.render(
    <Provider store={store}>
        { ()=> <Router children={routes} history={ new BrowserHistory() } /> }
    </Provider>,
    document.getElementById('App')
);
