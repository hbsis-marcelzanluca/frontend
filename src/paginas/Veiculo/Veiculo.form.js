import configuracoes from 'src/configs';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { TextField, FlatButton, RaisedButton, Dialog } from 'material-ui';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ServicoPerfis from './Perfil/Perfis.servico';

class FormularioVeiculo extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			perfis: [],
			perfisSelecionados: []
		}
	}

	componentDidMount() {
		ServicoPerfis
			.buscarPerfis()
			.then(resposta => {
				let perfis = [];
				resposta.map(perfil => {
					perfis.push({ value: perfil.id, label: perfil.descricao });
				});

				this.setState({ perfis: perfis })
			});
	}

	render() {
		let { descricao, placa, perfisSelecionados} = this.props.dados;

		return (
			<Formsy.Form onValidSubmit={ this.aoSalvar }>
				<Row>
					<Col md={ 6 }>
						<FormsyText
							name="descricao"
							floatingLabelText="Descrição do Veículo"
							value={ descricao }
							fullWidth={ true }
							required
						/>
					</Col>
					<Col md={ 6 }>
						<FormsyText
							name="placa"
							floatingLabelText="Placa do Veículo"
							value={ placa }
							fullWidth={ true }
							required
						/>
					</Col>
				</Row>

				<Row>
					<Col md={12}>
						<Select
							name="perfis"
							multi
							value={ this.state.perfisSelecionados } 
							placeholder="Selecione os perfis para o veículo" 
							options={ this.state.perfis } 
							onChange={ this.aoSelecionar.bind(this) } 
						/>
					</Col>
				</Row>

				<Row style={ { textAlign: 'right' } }>
					<br/>
					<FlatButton
						label="Cancelar"
						type="reset"
						primary={false}
						onClick={ this.props.aoCancelar }
					/>
					<FlatButton
						label="Salvar"
						type="submit"
						primary={true}
					/>
				</Row>
			</Formsy.Form>
		);
	}

	aoSelecionar = (perfisSelecionados) => {
		this.setState({ perfisSelecionados });
	}

	aoSalvar = (dadosFormulario) => {
		let perfisSelecionados = this.state.perfisSelecionados.map(perfil => perfil.value);
		let dadosParaSalvar = Object.assign(dadosFormulario, { perfis: perfisSelecionados });
		this.props.aoSalvar(dadosParaSalvar);
	}

}

export default FormularioVeiculo;
