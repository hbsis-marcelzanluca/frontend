 import React, { Component } from 'react';
 import Cabecalho from './Cabecalho';
 import Corpo from './Corpo';
 import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

 class Tabela extends Component {

 	render() {
 		let colunas = this.props.colunas;
 		let linhas = this.props.linhas;

 		return ( 				
 			<Table>
				{ this.gerarCabecalho(colunas) }
				{ this.gerarLinhas(linhas, colunas) }
			</Table>
 		);
 	}

 	gerarCabecalho = dadosCabecalho => {
 		return (
 			<TableHeader>
				<TableRow key={ 1 }>{
					dadosCabecalho.map((dado, indice) => {
						return (<TableHeaderColumn key={ indice }>{ dado.descricao }</TableHeaderColumn>);
					})
				}</TableRow>
 			</TableHeader>
 		);
	}

	gerarLinhas = (linhas, colunas) => {
		return (
			<TableBody>{
				linhas.map((linha, indiceLinha) => {
					return(
						<TableRow key={ indiceLinha }>{
							colunas.map((coluna, indiceColuna) => {
								if (coluna.acoes) return this.gerarAcoes(coluna, indiceColuna, linha);
								return(<TableRowColumn key={ indiceColuna }>{ linha[coluna.campo] }</TableRowColumn>);
							})
						}</TableRow>
					)
				})
			}</TableBody>
		);
	}

	gerarAcoes = (coluna, indiceColuna, registro) => {
		return (
			<TableRowColumn key={ indiceColuna }>{
				coluna.acoes.map((acao, indiceAcao) => {
					return(<a key={ indiceAcao } href="javascript:;" onClick={ acao.funcao.bind(this, registro) }>{ acao.descricao }</a>);
				})
			}</TableRowColumn>
		)
	}

 }

 export default Tabela;