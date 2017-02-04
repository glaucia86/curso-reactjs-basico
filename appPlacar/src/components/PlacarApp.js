import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracanã - Rio de Janeiro",
		data: "05/02/2017",
		horario: "16h",
	},

	casa: {
		nome: "Flamengo",
		escudo: "https://cdn.awsli.com.br/401/401496/marca/568921/e2838f769d.png",
	},

	visitante: {
		nome: "Fluminense",
		escudo:"https://upload.wikimedia.org/wikipedia/pt/0/07/Fluminense_logo.png",
	}
};

export default class PlacarApp extends React.Component {
	render() {
		/* O uso do '...dados' é uma maneira mais simplista para podermos acessar os dados criados acima
		Isso se chama 'spread operator' mais info AQUI -->> http://migre.me/vZ7Il */
		return <PlacarContainer {...dados} tempo={93} />;
	}
}
