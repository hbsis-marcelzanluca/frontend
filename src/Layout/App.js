import React, { Component } from 'react';
import Navbar from '../shared/Navbar';

class App extends Component {

	render() {
		return (
			<div>
				<Navbar />
				
				{ /* Este é o 'body' da aplicação (Não remova) */ }
				{ this.props.children }
			</div>
		);
	}

}

export default App;