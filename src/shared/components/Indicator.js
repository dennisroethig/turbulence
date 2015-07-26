import React from 'react';

export default class Indicator extends React.Component {

    static propTypes = {
        direction: React.PropTypes.number.isRequired
    };

    render() {
        const rotation = this.getRotationFor(this.props.direction);

        const style = {
            transform: `translateX(-50%) translateY(-50%) rotate(${rotation})`
        }

        return (
            <div className="bar__inner__indicator" style={style}>
                <svg height="16px" version="1.1" viewBox="0 0 16 16" width="16px">
                    <title/>
                    <defs/>
                    <g fill="none" fill-rule="evenodd" id="Icons with numbers" stroke="none" strokeWidth="1">
                        <g fill="#000000" id="Group" transform="translate(-144.000000, -192.000000)">
                            <path d="M144.017456,200 L160.019653,192.043091 L152,208.088623 L152,200 L144.017456,200 Z M144.017456,200" />
                        </g>
                    </g>
                </svg>
            </div>
        );
    }

    getRotationFor(direction) {
        const base = -45;
        let rotation = direction + base;

        return `${rotation}deg`;
    }

}
