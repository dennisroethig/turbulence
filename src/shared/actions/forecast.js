import { get, post } from '../fetch';
import { LOAD_FORECAST } from '../constants/ActionTypes';

export function loadForecast() {
    console.log('action:loadForecast');
  
    return {
        type: LOAD_FORECAST,
        promise: get('/api/forecast')
    };
}
