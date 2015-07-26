import React from 'react';
import Bar from './Bar';

export default class BarChart extends React.Component {

    static propTypes = {
        columns: React.PropTypes.array.isRequired
    };

    render() {
        const style = {
            'flexGrow': this.props.columns.length
        };

        // "wind":{
        //     "speed":6,
        //     "direction":172,
        //     "compassDirection":"N",
        //     "chill":6,
        //     "gusts":7,
        //     "unit":"mph"
        // },

        return (
            <div className="bar-chart" style={ style }>
                <div className="bar-chart__bars">
                    { this.props.columns.map(column => {

                        return (
                            <Bar key={ column.timestamp }
                                max={ column.swell.absMaxBreakingHeight }
                                min={ column.swell.absMinBreakingHeight }
                                period={ column.swell.components.combined.period }
                                windSpeed={ column.wind.speed }
                                windDirection={ column.wind.direction }
                            />
                        )
                    }) }
                </div>
                <div className="bar-chart__label">
                    { this.props.label }
                </div>
            </div>
        );
    }

}
