import React from 'react';

export default class Grid extends React.Component {
    render() {
        const leftAxis = [
            {leftValue:12, leftUnit:'ft', rightValue:12*4, rightUnit:'mph'},
            {leftValue:10, leftUnit:'ft', rightValue:10*4, rightUnit:'mph'},
            {leftValue:8, leftUnit:'ft', rightValue:8*4, rightUnit:'mph'},
            {leftValue:6, leftUnit:'ft', rightValue:6*4, rightUnit:'mph'},
            {leftValue:4, leftUnit:'ft', rightValue:4*4, rightUnit:'mph'},
            {leftValue:2, leftUnit:'ft', rightValue:2*4, rightUnit:'mph'},
        ]

        return (
            <div className="forecast-display__grid">
                { leftAxis.map(item => {
                    return (
                        <span key={item.leftValue} className="grid__unit--h">
                            <span className="grid__item grid__item--left">
                                {item.leftValue} {item.leftUnit}
                            </span>
                            <span className="grid__item grid__item--right">
                                {item.rightValue} {item.rightUnit}
                            </span>
                        </span>
                    );
                }) }
            </div>
        );
    }
}
