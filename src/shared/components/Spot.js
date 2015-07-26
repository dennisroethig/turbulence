import React, {PropTypes} from 'react';
import ForecastDisplay from './ForecastDisplay';

export default class Spot extends React.Component {

    static propTypes = {
        spot: PropTypes.object.isRequired,
        forecast: PropTypes.array
    };

    static defaultProps = {
        forecast: []
    };

    render() {
        return this.props.forecast.length
        ? <ForecastDisplay forecasts={ this.props.forecast } />
        : <div className="spinner">Loading...</div>;
    }

}
