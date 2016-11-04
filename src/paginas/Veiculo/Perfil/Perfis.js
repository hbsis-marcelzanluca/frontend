import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import { Dialog, Card, CardTitle, CardText, FlatButton,	FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ServicoPerfis from './Perfis.servico';
import Tabela from 'widgets/Tabela';
import FormularioPerfil from './Perfil.form';

const style = { position: 'absolute', right: 0, bottom: 0, margin: 20 };

class Perfis extends Component {

	constructor(props) { 
		super(props);
		this.state = { 
			modalPerfilAberta: false,
			perfilParaEditar: {},
			linhas: [],
			colunas: [
				{ "descricao": "Descrição", "campo": "descricao" },
				{ "descricao": "Baias 35", "campo": "quantidadeBaias35" },
				{ "descricao": "Baias 42", "campo": "quantidadeBaias42" },
				{ "descricao": "Ações", "acoes": [ 
						{ "descricao": "Editar", "icone": "pencil", "funcao": this.editarRegistro }, 
						{ "descricao": "Excluir", "icone": "trash", "funcao": this.excluirRegistro }
					] 
				}
			]
		};
	}

	componentDidMount() {
		this.buscarRegistros();
	}

	render() { 
		return (
			<div>
				<Container>	
					<Card>
						<CardTitle title="Perfis" subtitle="Configurações de perfil para os caminhões" />
						<CardText><Tabela linhas={ this.state.linhas } colunas={ this.state.colunas } /></CardText>
					</Card>
				</Container>

				<Dialog modal={ false } open={ this.state.modalPerfilAberta }>
					<FormularioPerfil 
						aoSalvar={ this.salvarRegistro } 
						aoCancelar={ this.manipuladorModalPerfil }
						dados={ this.state.perfilParaEditar } />
				</Dialog>

				<FloatingActionButton secondary={true} style={style} onTouchTap={ this.manipuladorModalPerfil }>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		);
	}

	editarRegistro = registro => {
		this.setState({ perfilParaEditar: registro });
		this.manipuladorModalPerfil();
	}

	buscarRegistros = () => {
		ServicoPerfis
			.buscarPerfis()
			.then(resposta => this.setState({ linhas: resposta }));
	}

	salvarRegistro = (dadosPerfil) => {
		let registroParaSalvar = Object.assign(this.state.perfilParaEditar, dadosPerfil);
		ServicoPerfis
			.salvarPerfil(registroParaSalvar)
			.then(() => {
				this.buscarRegistros()
				this.manipuladorModalPerfil();
			});
	}

	excluirRegistro = registro => {
		let idPerfil = registro.id;

		ServicoPerfis
			.excluirPerfil(idPerfil)
			.then(() => {
				let perfis = this.state.linhas.filter(perfil => perfil.id != idPerfil);
				this.setState({ linhas: perfis });
			});
	}

	manipuladorModalPerfil = () => {
		this.setState({ modalPerfilAberta: !this.state.modalPerfilAberta });
	}

}

export default Perfis;