import configuracoes from 'src/configs';
import React, { Component } from 'react';
import Tabela from 'widgets/Tabela';
import { Dialog, Card, CardTitle, CardText,	FloatingActionButton } from 'material-ui';
import { Container, Col } from 'react-grid-system';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ModalPerfil from './Perfil.modal';
import Requisicoes from 'widgets/Requisicoes';

const style = { position: 'absolute', right: 0, bottom: 0, margin: 20 };

class Perfis extends Component {

	constructor(props) { 
		super(props);
		this.state = { 
			modalPerfilAberta: false,
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
		Requisicoes
			.get(`${configuracoes.urlBase}/gerenciador-ocp/perfil-veiculo`)
			.then(resposta => this.setState({ linhas: resposta.data }));
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
				
				<ModalPerfil aberto={ this.state.modalPerfilAberta } />

				<FloatingActionButton secondary={true} style={style} onTouchTap={ this.manipuladorModalPerfil }>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		);
	}

	editarRegistro = registro => {
		alert(`Editando registro: ${registro.descricao}`);
	}

	excluirRegistro = registro => {
		let idPerfil = registro.id;
		Requisicoes
			.delete(`${configuracoes.urlBase}/gerenciador-ocp/perfil-veiculo/${idPerfil}`)
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