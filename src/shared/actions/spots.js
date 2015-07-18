import { get, post } from '../fetch';
import { LOAD_SPOTS } from '../constants/ActionTypes';

export function loadSpots() {
    return {
        type: LOAD_SPOTS,
        promise: get('/api/spots')
    };
}
