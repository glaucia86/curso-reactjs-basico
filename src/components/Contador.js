import React from 'react';

export default class Contador extends React.Component {
    render() {
        return (
            <div>
                <h1>0</h1>

                <div>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        );
    }
}
