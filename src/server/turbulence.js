import React from 'react';
import nunjucks from 'nunjucks';
import TurbulenceApp from '../shared/containers/TurbulenceApp';
import getReduxStore from '../shared/utils/getReduxStore';
import { Provider } from 'react-redux';
import { loadSpots } from '../shared/actions/spots';
import * as reducers from '../shared/reducers';

nunjucks.configure('views', { autoescape: true });

export default function turbulence() {
    return function* () {

        // Get store
        const store = getReduxStore(reducers);

        // Wait until spots are loaded
        yield store.dispatch(loadSpots());

        // Get initial state from store
        var state = store.getState();

        // Get application rendered to string
        const appString = React.renderToString(
            <Provider store={store}>
                {()=><TurbulenceApp {...state} />}
            </Provider>
        );

        // Render application to index.html and pass in initial state as global
        this.body = nunjucks.render('index.html', {
            appString,
            initialState:JSON.stringify(state),
            env:process.env
        });
    };
}
