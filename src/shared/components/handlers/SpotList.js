import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/spots';

@connect(state => ({
    spots: state.spots
}))
export default class SpotList {
    static propTypes = {
        spots: PropTypes.array.isRequired
    };

    render() {
        const { spots, dispatch } = this.props;
        const creators = bindActionCreators(actions, dispatch);

        return (
            <div {...this.props} {...creators} >
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
