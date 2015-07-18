import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/spots';
import Header from '../Header';

@connect(state => ({
    spots: state.spots
}))
export default class Application {
    render() {
        const { spots, dispatch } = this.props;
        const creators = bindActionCreators(actions, dispatch);

        return (
            <div {...this.props} {...creators} >
                <Header title="My App Title" />
                {this.props.children}
            </div>
        );
    }
}
