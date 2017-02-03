import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './pages/App';

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/cursos" component={Cursos}/>
				<Route path="/sobre" component={Sobre}/>
			</Route>
		</Router>
	),

    document.getElementById("app")
);

