import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Tabela from 'widgets/Tabela';
import Requisicoes from 'widgets/Requisicoes';

let estiloContainer = {	width: '80%', margin: '0 auto' };
let urlBase = 'http://localhost:8001/ocp-gerenciador';

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
						{ "descricao": "Editar", "icone": "", "funcao": this.editarRegistro }, 
						{ "descricao": "Excluir", "icone": "", "funcao": this.excluirRegistro }
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
			<div style={ estiloContainer }>
				<Paper zDepth={ 1 }>
					<Tabela linhas={ this.state.linhas } colunas={ this.state.colunas } />
				</Paper>
			</div>
		);
	}

	editarRegistro = registro => {
		console.log("Editando registro! ", registro);
	}

	excluirRegistro = registro => {
		console.log("Excluindo registro! ", registro);
	}

}

export default Perfis;