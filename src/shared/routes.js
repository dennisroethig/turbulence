import React from 'react';
import { Route } from 'react-router';
import Application from './components/handlers/Application';
import SpotList from './components/handlers/SpotList';
import SpotHandler from './components/handlers/SpotHandler';


// import { bindActionCreators } from 'redux';
import * as ForecastActions from './actions/forecast';
// const creators = bindActionCreators(actions, dispatch);

var loadForecast = function (nextState, transition, callback) {
    console.log('onEnter:loadForecast', nextState, transition, ForecastActions);

    // actions.loadForecast();

    // dispatch(CounterActions.increment())

    callback();
};

export default (
    <Route path="/" component={Application}>
        <Route path="spots" component={SpotList} />
        <Route path="spots/:id" component={SpotHandler} />
    </Route>
);
