import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabela from 'widgets/Tabela';
// import Request from 'request';
// import Requisicoes from 'widgets/Requisicoes';

let estiloContainer = {	width: '80%', margin: '0 auto' };
let urlBase = 'http://localhost:8001/wms/new';

let dados = [
	{ "descricao": "6x35/4x42", "baias35": 6, "baias42": 4 },
	{ "descricao": "4x35/6x42", "baias35": 4, "baias42": 6 },
	{ "descricao": "8x35/2x42", "baias35": 8, "baias42": 2 },
	{ "descricao": "2x35/8x42", "baias35": 2, "baias42": 8 },
];

class Perfis extends Component {

	constructor(props) { 
		super(props); 
		this.state = { 
			linhas: [],
			colunas: [
				{ "descricao": "Descrição", "campo": "descricao" },
				{ "descricao": "Baias 35", "campo": "baias35" },
				{ "descricao": "Baias 42", "campo": "baias42" },
				{ "descricao": "Ações", "campo": "baias42" },
			] 
		};
	}

	componentDidMount() {
		this.setState({ linhas: dados });
	}

	render() { 
		return (
			<div style={ estiloContainer }>
				<Paper zDepth={ 1 }>
					<Tabela linhas={ this.state.linhas } colunas={ this.state.colunas } />
				</Paper>
			</div>
		);
	}

}

export default Perfis;