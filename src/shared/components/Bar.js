import React from 'react';
import Indicator from './Indicator';

export default class Bar extends React.Component {

    static propTypes = {
        max: React.PropTypes.number.isRequired,
        min: React.PropTypes.number.isRequired,
        windSpeed: React.PropTypes.number.isRequired,
        windDirection: React.PropTypes.number.isRequired,
    };


    render() {
        const styleMax = {
            height: `${(this.props.max * 100) / 12}%`
        };
        const styleMin = {
            height: `${(this.props.min * 100) / 12}%`
        };
        const stylePeriod = {
            height: `${(this.props.period * 100) / 24}%`
        };
        const styleWind= {
            height: `${(this.props.windSpeed * 100) / 48}%`
        };

        return (
            <div className="bar">
                <div className="bar__inner bar__inner--wind" style={ styleWind }>
                    <Indicator direction={this.props.windDirection} />
                </div>
                <div className="bar__inner bar__inner--period" style={ stylePeriod } />
                <div className="bar__inner bar__inner--max" style={ styleMax }></div>
                <div className="bar__inner bar__inner--min" style={ styleMin } />
            </div>
        );
    }

}
