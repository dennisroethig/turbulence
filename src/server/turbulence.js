import React from 'react';
import nunjucks from 'nunjucks';
import TurbulenceApp from '../shared/containers/TurbulenceApp';
import create from '../shared/redux';
import { Provider } from 'redux/react';
import { loadSpots } from '../shared/actions/spots';
import * as stores from '../shared/stores';

nunjucks.configure('views', { autoescape: true });

export default function turbulence() {
    return function* () {
        const redux = create(stores);
        yield redux.dispatch(loadSpots());
        var state = redux.getState();

        const appString = React.renderToString(
            <Provider redux={redux}>
                {()=><TurbulenceApp {...state} />}
            </Provider>
        );

        this.body = nunjucks.render('index.html', {
            appString,
            initialState:JSON.stringify(state),
            env:process.env
        });
    };
}
