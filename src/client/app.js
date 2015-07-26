window.__CLIENT__ = true;
window.__SERVER__ = false;

import 'babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import Router, { Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import Application from '../shared/components/handlers/Application';
import getReduxStore from '../shared/utils/getReduxStore';
import * as reducers from '../shared/reducers';
// import * as LocationActions from '../shared/actions/location';
import routes from '../shared/routes';

import { reduxRouteComponent } from 'redux-react-router';

const state = window.__initialState;
const store = getReduxStore(reducers, state);

// history.addChangeListener(location => {
//     console.log('HISTORY:UPDATED');
// });

// history.addChangeListener(() => store.dispatch(LocationActions.routeLocationDidUpdate(location)));

React.render(
    <Provider store={store}>
        { ()=> {
            return(
                <Router history={history}>
                    <Route component={reduxRouteComponent(store)}>
                        {routes}
                    </Route>
                </Router>
            );
        } }
    </Provider>,
    document.getElementById('App')
);
