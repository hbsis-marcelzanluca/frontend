import configuracoes from 'src/configs';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { TextField, FlatButton, RaisedButton, Dialog } from 'material-ui';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

class FormularioPerfil extends Component {

	render() {
		let {
			descricao,
			quantidadeBaias14,
			quantidadeBaias21,
			quantidadeBaias28,
			quantidadeBaias35,
			quantidadeBaias42 } = this.props.dados;

		return (
			<Formsy.Form onValidSubmit={ this.props.aoSalvar }>
				<Row>
					<Col md={ 12 }>
						<FormsyText
							name="descricao"
							floatingLabelText="Descrição do perfil"
							value={ descricao }
							fullWidth={ true }
							required
						/>
					</Col>
				</Row>

				<Row>
					<Col md={ 4 }>
						<FormsyText
							name="quantidadeBaias14"
							floatingLabelText="Quantidade de baias 14"
							value={ quantidadeBaias14 }
							fullWidth={ true }
							type="number"
							required
						/>
					</Col>
					<Col md={ 4 }>
						<FormsyText
							name="quantidadeBaias21"
							floatingLabelText="Quantidade de baias 21"
							value={ quantidadeBaias21 }
							fullWidth={ true }
							type="number"
							required
						/>
					</Col>

					<Col md={ 4 }>
						<FormsyText
							name="quantidadeBaias28"
							floatingLabelText="Quantidade de baias 28"
							value={ quantidadeBaias28 }
							fullWidth={ true }
							type="number"
							required
						/>
					</Col>
				</Row>

				<Row>
					<Col md={ 6 }>
						<FormsyText
							name="quantidadeBaias35"
							floatingLabelText="Quantidade de baias 35"
							value={ quantidadeBaias35 }
							fullWidth={ true }
							type="number"
							required
						/>
					</Col>
					<Col md={ 6 }>
						<FormsyText
							name="quantidadeBaias42"
							floatingLabelText="Quantidade de baias 42"
							value={ quantidadeBaias42 }
							fullWidth={ true }
							type="number"
							required
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

}

export default FormularioPerfil;
