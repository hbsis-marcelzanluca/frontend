 import React, { Component } from 'react';
 import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
 import EstilosTabela from './tabela.css';

 class Tabela extends Component {

 	render() {
 		let colunas = this.props.colunas;
 		let linhas = this.props.linhas;

 		return ( 				
 			<Table
				fixedHeader={ true }
				fixedFooter={ false }
				selectable={ false }
				multiSelectable={ false }
			>
				{ this.gerarCabecalho(colunas) }
				{ this.gerarLinhas(linhas, colunas) }
			</Table>
 		);
 	}

 	gerarCabecalho = dadosCabecalho => {
 		return (
 			<TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
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
			<TableBody showRowHover={ true } displayRowCheckbox={ false }>{
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
			<TableRowColumn key={ indiceColuna } className="acoes-tabela-coluna">{
				coluna.acoes.map((acao, indiceAcao) => {
					return(<a key={ indiceAcao } href="javascript:;" className="acao-tabela" onClick={ acao.funcao.bind(this, registro) }><i className={ `fa fa-${acao.icone}` }></i></a>);
				})
			}</TableRowColumn>
		)
	}

 }

 export default Tabela;