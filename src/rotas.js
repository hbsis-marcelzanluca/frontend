import React, { Component } from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './layouts/App';
import Index from './paginas/Index';
import Perfis from './paginas/Veiculo/Perfis';

class Rotas extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Router history={ hashHistory }>
			        <Route component={ App }>
				        <Route path="/" component={ Index } />
				        <Route path="/veiculo/perfis" component={ Perfis } />
			        </Route>
			    </Router>
			</MuiThemeProvider>
		);
	}
}

export default Rotas;