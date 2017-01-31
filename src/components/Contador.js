import React from 'react';

export default class Contador extends React.Component {
	constructor() {
		super();

		/* Toda vez que a app tiver alguma ação que representa alguma mudança de estado
			se faz necessário criar um state para definir as ações do objeto criado. */
		this.state = {
			contador: 0,
		};
	}

	/* Método responsável por Decrementrar o Placar */
	decrementarPlacar() {
		/* A propriedade 'setState' serve justamente para podermos alterar o estado pré-definido acima
			é somente com essa propriedade que conseguimos alterar a ação do 'contador' */
		this.setState({
			contador: this.state.contador - 1
		});
	}

	/* Método responsável por Incrementar o Placar */
	incrementarPlacar() {
		this.setState({
			contador: this.state.contador + 1
		});
	}

    render() {
        return (
            <div>
                <h1>{this.state.contador}</h1>
                <div>
                    <button onClick={this.decrementarPlacar.bind(this)}>-</button>
                    <button onClick={this.incrementarPlacar.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}
