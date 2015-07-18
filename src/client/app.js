window.__CLIENT__ = true;
window.__SERVER__ = false;

import 'babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import TurbulenceApp from '../shared/containers/TurbulenceApp';
import getReduxStore from '../shared/utils/getReduxStore';
import * as reducers from '../shared/reducers';

const state = window.__initialState;
const store = getReduxStore(reducers, state);

React.render(
    <Provider store={store}>
        {()=><TurbulenceApp />}
    </Provider>,
    document.getElementById('App')
);
