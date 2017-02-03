import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './pages/App';

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App} />
		</Router>
	),

    document.getElementById("app")
);

