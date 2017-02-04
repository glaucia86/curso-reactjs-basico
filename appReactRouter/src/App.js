import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './pages/App';
import Sobre from './pages/Sobre';
import Cursos from './pages/Cursos';
import Home from './pages/Home'

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/cursos" component={Cursos}/>
				<Route path="/sobre" component={Sobre}/>				
			</Route>
		</Router>
	),

    document.getElementById("app")
);

