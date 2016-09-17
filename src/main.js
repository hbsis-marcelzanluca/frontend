import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Páginas
import App from './Layout/App';
import Index from './Paginas/Index';
import Contato from './Paginas/Contato';

render(
	<MuiThemeProvider>
		<Router history={ hashHistory }>
	        <Route component={ App }>
		        <Route path="/" component={ Index } />
		        <Route path="/contato" component={ Contato } />
	        </Route>
	    </Router>
	</MuiThemeProvider>, 
    document.getElementById('wrapper')
);