import React, { Component } from 'react';
import Tabela from 'widgets/Tabela';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FormularioPerfil from './Perfil.form';
import Requisicoes from 'widgets/Requisicoes';

const estiloContainer = {	width: '80%', margin: '0 auto' };
const style = { position: 'absolute', right: 0, bottom: 0, margin: 20 };
const urlBase = 'http://localhost:8001/gerenciador-ocp';

class Perfis extends Component {

	constructor(props) { 
		super(props); 
		this.state = { 
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
			.get(`${urlBase}/perfil-veiculo`)
			.then(resposta => this.setState({ linhas: resposta.data }));
	}

	render() { 
		return (
			<div>
				<div style={ estiloContainer }>
					<Card>
						<CardTitle title="Perfis" subtitle="Configurações de perfil para os caminhões" />
						<CardText>
							<Tabela linhas={ this.state.linhas } colunas={ this.state.colunas } />
						</CardText>
					</Card>
				</div>
				
				<FormularioPerfil />

				<FloatingActionButton secondary={true} style={style}>
					<ContentAdd />
				</FloatingActionButton>
			</div>
		);
	}

	editarRegistro = registro => {
		alert(`Editando registro: ${registro.descricao}`);
	}

	excluirRegistro = registro => {
		console.log("Excluindo registro! ", registro);
	}

}

export default Perfis;