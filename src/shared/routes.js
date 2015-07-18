import React from 'react';
import { Route } from 'react-router';
import Application from './components/handlers/Application';
import SpotList from './components/handlers/SpotList';
import SpotHandler from './components/handlers/SpotHandler';

export default (
    <Route component={Application}>
        <Route path="/spots" component={SpotList} />
        <Route path="/spots/:id" component={SpotHandler} />
    </Route>
);
