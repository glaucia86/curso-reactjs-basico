import React from 'react';

import BotaoGol from './BotaoGol';

export default class Time extends React.Component {
    render() {
        return (
            <div>
                <div>
	                <h1 className="title">{this.props.nome}</h1>
                    <figure className="image is-128x128">
                        <img className="picture" src={this.props.escudo}/>
                    </figure>
			        <div className="container">
                        <div className="content has-text-centered">
                            <h2 className="title">{this.props.gols}</h2>
                            <BotaoGol marcarGol={this.props.marcarGol} />
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}