import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './pages/App';
import Sobre from './pages/Sobre';
import Cursos from './pages/Cursos';
import Home from './pages/Home';
import Curso from './components/Curso';

ReactDOM.render((
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="cursos" component={Cursos}>
					<Route path=":id" component={Curso}/>
				</Route>
				<Route path="sobre" component={Sobre}/>				
			</Route>
		</Router>
	),

    document.getElementById("app")
);

