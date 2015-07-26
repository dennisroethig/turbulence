import React from 'react';
import nunjucks from 'nunjucks';
import Application from '../shared/components/handlers/Application';

import getReduxStore from '../shared/utils/getReduxStore';
import { Provider } from 'react-redux';
import { loadSpots } from '../shared/actions/spots';
import * as reducers from '../shared/reducers';

import Router, {Route} from 'react-router';
import Location from 'react-router/lib/Location';
import routes from '../shared/routes';
import { reduxRouteComponent } from 'redux-react-router';

nunjucks.configure('views', { autoescape: true });

export default function turbulence() {
    return function* () {
        // Get store
        const store = getReduxStore(reducers);

        // Wait until spots are loaded
        yield store.dispatch(loadSpots());

        var location = new Location(this.request.url);

        Router.run(routes, location, (error, initialState, transition) => {

            // Get initial state from store
            var state =  Object.assign(store.getState(), initialState);

            // Get application rendered to string
            const appString = React.renderToString(
                <Provider store={store}>
                    { ()=> {
                        return(
                            <Router {...state}>
                                <Route component={reduxRouteComponent(store)} />
                            </Router>
                        );
                    } }
                </Provider>
            );

            // Render application to index.html and pass in initial state as global
            this.body = nunjucks.render('index.html', {
                appString,
                initialState: JSON.stringify(state),
                env:process.env
            });
        });

    };
}

// const appString = React.renderToString(
//     <Provider store={store}>
//         {()=><Application {...state} />}
//     </Provider>
// );
