import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export default class Header {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const { title } = this.props;

        return (
            <header className="header">
                <Link to={`/spots`}>spots</Link>
                {` | `}
                <Link to={`/spots/1`}>spot 1</Link>
                {` | `}
                <Link to={`/spots/2`}>spot 2</Link>
            </header>
        );
    }
}
