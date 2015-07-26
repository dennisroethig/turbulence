import { LOAD_SPOTS, LOAD_FORECAST } from './constants/ActionTypes';

export default {
    spots: function (init=[], {type, result}) {
        switch (type) {
            case LOAD_SPOTS:
                console.log('spots:LOAD_SPOTS', result);
                return result;
            default:
                console.log('spots:default', init);
                return init;
        }
    },

    forecast: function (init=[], {type, result}) {
        switch (type) {
            case LOAD_FORECAST:
                console.log('forecast:LOAD_FORECAST', result);
                return result;
            default:
                console.log('forecast:default', init);
                return init;
        }
    }
}
