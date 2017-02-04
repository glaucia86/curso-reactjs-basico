import React from 'react';

export default class Partida extends React.Component {
    render() {
        return (
            <div className="content has-text-centered">
                <h2 className="title">{this.props.estadio}</h2>
                <div>
                    <span className="subtitle">{this.props.data}</span>
                    <span className="subtitle"> - </span>
                    <span className="subtitle">{this.props.horario}</span>
                </div>
            </div>       
        );
    }
}