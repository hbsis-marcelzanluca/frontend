import React, { Component } from 'react';
import { Container } from 'react-grid-system';
import { Dialog, Card, CardTitle, CardText, FlatButton,	FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Tabela from 'widgets/Tabela';
import ServicoVeiculo from './Veiculo.servico';
import FormularioVeiculo from './Veiculo.form';

const style = { position: 'absolute', right: 0, bottom: 0, margin: 20 };

class Veiculo extends Component {

  constructor(props) {
		super(props);
    this.state = {
			modalVeiculoAberta: false,
			veiculoParaEditar: {},
			linhas: [],
			colunas: [
				{ "descricao": "Descrição", "campo": "descricao" },
				{ "descricao": "Placa", "campo": "placa" },
				{ "descricao": "Ações", "acoes": [
						{ "descricao": "Editar", "icone": "pencil", "funcao": this.editarRegistro },
						{ "descricao": "Excluir", "icone": "trash", "funcao": this.excluirRegistro }
					]
				}
			]
    }
  }

  componentDidMount() {
    this.buscarRegistros();
  }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <CardTitle title="Veículos" subtitle="Configurações de veículos" />
            <CardText><Tabela linhas={ this.state.linhas } colunas={ this.state.colunas } /></CardText>
          </Card>
        </Container>

        <Dialog modal={ false } open={ this.state.modalVeiculoAberta } style={ { overflowY: 'inherit' } }>
          <FormularioVeiculo
            aoSalvar={ this.salvarRegistro } 
            aoCancelar={ this.manipuladorModalVeiculo } 
            dados={ this.state.veiculoParaEditar }
          />
        </Dialog>

        <FloatingActionButton secondary={true} style={style} onTouchTap={ this.manipuladorModalVeiculo }>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }

  editarRegistro = registro => {
    this.setState({ veiculoParaEditar: registro });
    this.manipuladorModalVeiculo();
  }

  buscarRegistros = () => {
    ServicoVeiculo
      .buscar()
      .then(resposta => this.setState({ linhas: resposta }));
  }

  salvarRegistro = (dadosVeiculo) => {
    let registroParaSalvar = Object.assign(
      this.state.veiculoParaEditar,
      dadosVeiculo
    );

    ServicoVeiculo
      .salvar(registroParaSalvar)
      .then(() => {
        this.buscarRegistros()
        this.manipuladorModalVeiculo();
      });
  }

  excluirRegistro = registro => {
    ServicoVeiculo
      .excluir(registro.id)
      .then(() => this.buscarRegistros());
  }

  manipuladorModalVeiculo = () => {
    this.setState({ modalVeiculoAberta: !this.state.modalVeiculoAberta });
  }

}

export default Veiculo;
