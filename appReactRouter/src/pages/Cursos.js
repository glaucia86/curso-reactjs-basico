import React from 'react';

export default class Cursos extends React.Component {
	render() {
		return (
			<div>
				<h1 className="title">Lista de Cursos</h1>
				{this.props.children}
			</div>
		);
	}
};
