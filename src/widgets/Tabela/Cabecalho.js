import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class Cabecalho extends Component {

	render() {
		return (
			<TableHeader>
				<TableRow key={ 1 }>{ this.gerarColunasCabecalho(this.props.dadosCabecalho) }</TableRow>
 			</TableHeader>
		);
	}

	gerarColunasCabecalho = dadosCabecalho => {
		return dadosCabecalho.map((dado, indice) => {
			return (<TableHeaderColumn key={ indice }>{ dado.descricao }</TableHeaderColumn>);
		});
	}

}

export default Cabecalho;