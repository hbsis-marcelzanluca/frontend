 import React, { Component } from 'react';
 import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

 class Tabela extends Component {
 	render() {
 		let linhas = this.props.linhas;
 		let colunas = this.props.colunas;

 		return (
 			<Table>
				<TableHeader>
					<TableRow key={1}>
					{ colunas.map(coluna => {
						return (
							<TableHeaderColumn>{ coluna.descricao }</TableHeaderColumn>
						);
					}) }
					</TableRow>
				</TableHeader>
				<TableBody>
					{ linhas.map(linha => {
						return (
							<TableRow key={ linha.id }>
								<TableRowColumn>{ linha.id }</TableRowColumn>
								<TableRowColumn>{ linha.texto }</TableRowColumn>
							</TableRow>
						);
					}) }
				</TableBody>
			</Table>
 		);
 	}
 }

 export default Tabela;