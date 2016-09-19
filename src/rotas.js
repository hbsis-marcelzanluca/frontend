import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './layouts/App';
import Index from './paginas/Index';

class Rotas extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Router history={ hashHistory }>
			        <Route component={ App }>
				        <Route path="/" component={ Index } />
			        </Route>
			    </Router>
			</MuiThemeProvider>
		);
	}
}

export default Rotas;