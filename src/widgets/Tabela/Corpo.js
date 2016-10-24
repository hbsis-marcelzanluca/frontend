import React, { Component } from 'react';
import { TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

class Corpo extends Component {

	render() {
		let linhas = this.props.dados;
		let colunas = this.props.colunas;

		return (
			<TableBody>{ this.gerarLinhasTabela(linhas, colunas) }</TableBody>
		);
	}

	gerarLinhasTabela = (linhas, colunas) => {
		return linhas.map((linha, indiceLinha) => {
			return(
				<TableRow key={ indiceLinha }>{
					colunas.map((coluna, indiceColuna) => {
						return(<TableRowColumn key={ indiceColuna }>{ linha[coluna.campo] }</TableRowColumn>)
					})
				}</TableRow>
			)
		});
	}

}

export default Corpo;