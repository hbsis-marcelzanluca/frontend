import configuracoes from 'src/configs';
import Requisicoes from 'widgets/Requisicoes';

class ServicoVeiculo {

	buscar() {
		return Requisicoes
			.get(`${configuracoes.urlBase}/gerenciador-ocp/veiculo`)
			.then(resposta => resposta.data);
	}

	salvar(dados) {
		if (dados.hasOwnProperty('id'))
			return Requisicoes
				.put(`${configuracoes.urlBase}/gerenciador-ocp/veiculo/${dados.id}`, dados);

		return Requisicoes
			.post(`${configuracoes.urlBase}/gerenciador-ocp/veiculo`, dados);
	}

	excluir(id) {
		return Requisicoes
			.delete(`${configuracoes.urlBase}/gerenciador-ocp/veiculo/${id}`);
	}

}

export default new ServicoVeiculo;
