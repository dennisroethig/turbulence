window.__CLIENT__ = true;
window.__SERVER__ = false;

import 'babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import Router from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import Application from '../shared/components/handlers/Application';
import getReduxStore from '../shared/utils/getReduxStore';
import * as reducers from '../shared/reducers';
import routes from '../shared/routes';


const state = window.__initialState;
const store = getReduxStore(reducers, state);

React.render(
    <Provider store={store}>
        { ()=> <Router children={routes} history={history} /> }
    </Provider>,
    document.getElementById('App')
);
