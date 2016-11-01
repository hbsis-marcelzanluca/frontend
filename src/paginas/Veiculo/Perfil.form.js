import configuracoes from 'src/configs';
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { TextField, FlatButton, RaisedButton, Dialog } from 'material-ui';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import Requisicoes from 'widgets/Requisicoes';

class FormularioPerfil extends Component {

	render() {
		return (
			<Formsy.Form onValidSubmit={ this.props.aoSalvar }>
				<Row>
					<Col md={ 12 }>
						<FormsyText 
							name="descricao" 
							floatingLabelText="Descrição do perfil" 
							value={ this.props.dados.descricao }
							fullWidth={ true } 
							required
						/>
					</Col>
				</Row>

				<Row>
					<Col md={ 6 }>
						<FormsyText 
							name="quantidadeBaias35" 
							floatingLabelText="Quantidade de baias 35" 
							fullWidth={ true } 
							type="number"
							required
						/>
					</Col>
					<Col md={ 6 }>
						<FormsyText 
							name="quantidadeBaias42" 
							floatingLabelText="Quantidade de baias 42" 
							fullWidth={ true } 
							type="number"
							required
						/>
					</Col>
				</Row>

				<Row style={ { textAlign: 'right' } }>
					<br/>
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