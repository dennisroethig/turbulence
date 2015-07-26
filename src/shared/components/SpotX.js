import React, { PropTypes } from 'react';

export default class Spot {
    static propTypes = {
        spot: PropTypes.object.isRequired,
        forecast: PropTypes.array
    };
    static defaultProps = {
        forecast: []
    };

    componentDidMount() {
        console.log('componentDidMount');
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate', this.props);

        // this.props.loadForecast();
    }

    render() {
        const { loadForecast, spot, forecast } = this.props;

        return (
            <div>
                <h1>{`Spot`}</h1>
                <h2>{`Id: ${spot.id}`}</h2>
                <h2>{`Name: ${spot.name}`}</h2>
                <ul>
                    {forecast.map(unit => <li key={unit.timestamp}>{unit.swell.minBreakingHeight}</li>)}
                </ul>
            </div>
        );
    }
}
