window.__CLIENT__ = true;
window.__SERVER__ = false;

import 'babel/polyfill';

import React from 'react';
import { Provider } from 'redux/react';
import TurbulenceApp from '../shared/containers/TurbulenceApp';
import create from '../shared/redux';
import * as stores from '../shared/stores';

const state = window.__initialState;
const redux = create(stores, state);

React.render(
    <Provider redux={redux}>
        {()=><TurbulenceApp />}
    </Provider>,
    document.getElementById('App')
);
