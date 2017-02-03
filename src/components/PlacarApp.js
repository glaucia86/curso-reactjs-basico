import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracanã - Rio de Janeiro",
		data: "05/02/2017",
		horario: "16h",
	},

	casa: {
		nome: "Flamengo"
	},

	visitante: {
		nome: "Vasco"
	}
};

export default class PlacarApp extends React.Component {
	render() {
		return <PlacarContainer partida={dados.partida}
								casa={dados.casa}
								visitante={dados.visitante} />;
	}
}
