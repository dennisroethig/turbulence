import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ForecastActions from '../../actions/forecast';
// import * as actions from '../../actions/spots';
import Spot from '../Spot';

@connect(state => ({
    spots: state.spots,
    forecast: state.forecast,
    router: state.router
}))
export default class SpotHandler {

    componentDidMount() {
        const { forecast, dispatch, router } = this.props;
        if (!forecast.length) dispatch(ForecastActions.loadForecast());
    }

    componentDidUpdate() {
        const { forecast, dispatch, router } = this.props;
        if (!forecast.length) dispatch(ForecastActions.loadForecast());
    }

    render() {
        const { spots, forecast, dispatch, params, router } = this.props;

        return (
            <Spot
                spot={spots.filter(spot => spot.id == params.id)[0]}
                forecast={forecast}
                {...this.props}
                {...bindActionCreators(ForecastActions, dispatch)}
            />
        );
    }
}

// SpotHandler.onEnter = function() {
//     console.log('YES YES YES');
// }
