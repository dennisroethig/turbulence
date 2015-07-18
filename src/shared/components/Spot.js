import React, { PropTypes } from 'react';

export default class Spot {
    static propTypes = {
        spot: PropTypes.object.isRequired
    };

    render() {
        const { spot } = this.props;

        return (
            <div>
                <h1>{`Spot`}</h1>
                <h2>{`Id: ${spot.id}`}</h2>
                <h2>{`Name: ${spot.name}`}</h2>
            </div>
        );
    }
}
