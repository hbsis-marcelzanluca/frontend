import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class ExecutorSQL extends React.Component {

	render() {
		return (
			<MuiThemeProvider>
				<AppBar
					style={{ backgroundColor: '#1E88E5' }}
					title="Executor Teste"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			</MuiThemeProvider>
		);
	}

}

ReactDOM.render(<ExecutorSQL />, document.getElementById('wrapper'));