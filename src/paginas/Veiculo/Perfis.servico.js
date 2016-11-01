import configuracoes from 'src/configs';
import Requisicoes from 'widgets/Requisicoes';

class ServicoPerfis {

	buscarPerfis() {
		return Requisicoes
			.get(`${configuracoes.urlBase}/gerenciador-ocp/perfil-veiculo`)
			.then(resposta => resposta.data);
	}

	salvarPerfil(dados) {
		if (dados.hasOwnProperty('id'))
			return Requisicoes
				.put(`${configuracoes.urlBase}/gerenciador-ocp/perfil-veiculo/${dados.id}`, dados);

		return Requisicoes
			.post(`${configuracoes.urlBase}/gerenciador-ocp/perfil-veiculo`, dados);
	}

	excluirPerfil(idPerfil) {
		return Requisicoes
			.delete(`${configuracoes.urlBase}/gerenciador-ocp/perfil-veiculo/${idPerfil}`);
	}

}

export default new ServicoPerfis;