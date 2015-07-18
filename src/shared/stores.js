import { LOAD_SPOTS } from './constants/ActionTypes';

export default {
    spots: function (init=[], {type, result}) {
        switch (type) {
            case LOAD_SPOTS:
                return result;
            default:
                return init;
        }
    }
}
