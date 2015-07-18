import { createStore, combineReducers, applyMiddleware } from 'redux';

export default function getReduxStore(reducers, initialState) {
    const reducer = combineReducers(reducers);
    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

    return createStoreWithMiddleware(reducer, initialState);
}

function promiseMiddleware() {
    return (next) => (action) => {
        if (!action) return;
        const { promise, ...rest } = action;
        if (!promise) { return next({ ...rest }); }

        return promise.then(
            res => next({...rest, result:res}),
            err => console.log(err)
        );
    };
}
