import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import Header from '../components/Header';
import SpotList from '../components/SpotList';
import * as actions from '../actions/spots';

@connect(state => ({
    spots: state.spots
}))
export default class TurbulenceApp {
    render() {
        const { spots, dispatch } = this.props;
        const creators = bindActionCreators(actions, dispatch);
        // return <Counter {...this.props} {...creators} />;

        return (
            <div>
                <Header title="My App Title" />
                <SpotList spots={this.props.spots} />
            </div>
        );
    }
}
