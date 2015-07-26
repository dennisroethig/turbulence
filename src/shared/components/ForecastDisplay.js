import React from 'react';
import { getDateStamp, getDayNameFor } from '../utils/date';
// import Forecast from './Forecast';
// import ForecastDays from './ForecastDays';
import BarChart from './BarChart';
import Grid from './Grid';

export default class ForecastDisplay extends React.Component {

    static propTypes = {
        forecasts: React.PropTypes.array.isRequired
    };

    render() {
        const dateStamps = this.getDateStampsFor(this.props.forecasts);

        return (
            <div className="forecast-display">
                <Grid />
                <div className="forecast-display__charts">
                    {dateStamps.map(dateStamp => {
                        return (
                            <BarChart
                                key={ dateStamp }
                                columns={ this.props.forecasts.filter(forecast => getDateStamp(forecast.localTimestamp) === dateStamp) }
                                label={ getDayNameFor(dateStamp) }
                            />
                        )
                    })}
                </div>
            </div>
        );
    }

    getDateStampsFor() {
        let dateStamps = [];
        const daysArray = this.props.forecasts.map(forecast => getDateStamp(forecast.localTimestamp));
        const daysSet = new Set(daysArray);

        for (let day of daysSet) dateStamps.push(day);

        return dateStamps
    }
}








//
// <div className="forecasts">
//     { this.props.forecasts.map( forecast => <Forecast data={forecast} key={forecast.localTimestamp} /> ) }
// </div>
// <ForecastDays days={days} />
