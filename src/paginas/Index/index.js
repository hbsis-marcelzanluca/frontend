import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabela from 'widgets/Tabela';
import request from 'es6-request';

let estiloContainer = {
	width: '80%',
	margin: '0 auto'
};

class Index extends Component {

	gerarLinhas = () => {
		let linhas = [];

		for (var i = 1; i <= 10; i++) {
			linhas.push({
				id: i,
				texto: 'Linha ' + i
			});
		}

		return linhas;
	}

	render() {
		return (
			<div style={estiloContainer}>
				<Paper zDepth={1}>
					<Tabela linhas={ this.gerarLinhas() } colunas={ [ { id: 1, descricao: "Coluna 1" }, { id: 2, descricao: "Coluna 2" } ] } />
				</Paper>
			</div>
		);
	}
}

export default Index;