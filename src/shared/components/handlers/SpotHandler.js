import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/spots';
import Spot from '../Spot';

@connect(state => ({
    spots: state.spots
}))
export default class SpotHandler {
    render() {
        const { spots, dispatch, params } = this.props;
        const creators = bindActionCreators(actions, dispatch);
        const spot = spots.filter(spot => spot.id == params.id)[0];

        return (
            <Spot spot={spot} {...this.props} {...creators} />
        );
    }
}
