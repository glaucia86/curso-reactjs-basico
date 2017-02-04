import React from 'react';

const cursos = [
	{ nome: "React.Js" },
	{ nome: "Redux" },
	{ nome: "Node.Js" },
	{ nome: "React Native" },
];

export default class Curso extends React.Component {
	render() {
		return (
			<h1>Curso de {cursos[this.props.params.id].nome}</h1>
		);
	}
};
