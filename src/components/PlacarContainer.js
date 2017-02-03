import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Time />
				</div>
				<div>
					<Partida />
				</div>
				<div>
					<Time />
				</div>
			</div>
		);
	}
}