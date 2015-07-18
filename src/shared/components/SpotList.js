import React, { PropTypes } from 'react';

export default class SpotList {
    static propTypes = {
        spots: PropTypes.array.isRequired
    };

    render() {
        const { title } = this.props;

        return (
            <div>
                {this.props.spots.map(spot => {
                    return (
                        <div key={spot.id}>
                            {`${spot.id} - ${spot.name}`}
                        </div>
                    );
                })}
            </div>
        );
    }
}
