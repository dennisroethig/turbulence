import React, { PropTypes } from 'react';

export default class Header {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const { title } = this.props;

        return (
            <header>
                {`APP HEADER: ${title}`}
            </header>
        );
    }
}
