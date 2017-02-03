import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
	constructor() {
		super();

		this.state = {
			gols_casa: 0,
			gols_visitante: 0,
		};
	}


	/* Método responsável por adicionar o placar do time da casa */
	marcarGolCasa() {
		this.setState({
			gols_casa: this.state.gols_casa + 1,
			
		});
	}

	/* Método responsável por adicionar o placar do time da casa */
	marcarGolVisitante() {
		this.setState({
			gols_visitante: this.state.gols_visitante + 1,
		});
	}


	render() {

		/* Aqui estamos extraindo dados para deixar o código mais clean */
		const { partida, casa, visitante } = this.props;
		const estilo = { float: "left", "marginRight": "20px" };

		return (
			<div>
				<div style={estilo}>
					<h3>Casa</h3>
					<Time nome={casa.nome} 
						  gols={this.state.gols_casa} 
						  marcarGol={this.marcarGolCasa.bind(this)} />
				</div>
				<div style={estilo}>
					<Partida {...partida} />
				</div>
				<div style={estilo}>
					<h3>Visitante</h3>
					<Time nome={visitante.nome} 
						  gols={this.state.gols_visitante}
						  marcarGol={this.marcarGolVisitante.bind(this)} />
				</div>
				<div>{this.props.clima}</div>
				<div style={{ clear: "both" }}></div>
			</div>
		);
	}
}

/* O 'propTypes' serve justamente para pré definirmos o tipo que a propriedade será */
PlacarContainer.propTypes = {
	clima: React.PropTypes.string,
	tempo: React.PropTypes.number.isRequired
}

/* O 'defaultProps' serve para deixar pré-definido um determinado valor */
PlacarContainer.defaultProps = {
	clima: 'Ensolarado'
}

/* Os Tipos de 'propTypes' mais importantes no React.Js

	1) React.PropTyes.any
	2) React.PropTyes.array,
	3) React.PropTyes.bool,
	4) React.PropTyes.func,
	5) React.PropTyes.number,
	6) React.PropTyes.object,
	7) React.PropTyes.string,
	8) React.PropTyes.instanceOf(Partida),
	9) React.PropTyes.oneOf(['Flamengo', 'Fluminense']),
	10) React.PropTyes.oneOfType([Time, Partida]),
	11) React.PropTyes.arrayOf(React.PropTyes.string),
	12) React.PropTyes.shape({
			nome: React.PropTyes.string,	
	})

	Mais informações AQUI -->> https://facebook.github.io/react/docs/components-and-props.html
 */
