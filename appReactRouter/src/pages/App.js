import React from 'react';

export default class App extends React.Component {

	render() {
		return (
			<div>
				<nav className="nav is-tab has-shadow">
					<div className="nav-left">
						<a href="#" className="nav-item">Página Principal</a>
						<a href="#" className="nav-item">Cursos</a>
						<a href="#" className="nav-item">Sobre</a>
					</div>
				</nav>

				<section className="section">
					<div className="container">
						<h1 className="title">Monstrando componente através do Router</h1>
					</div>
				</section>
			</div>
		);
	}
}