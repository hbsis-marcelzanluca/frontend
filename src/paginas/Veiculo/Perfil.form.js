import React, { Component } from 'react';
import { Container, Col } from 'react-grid-system';
import { TextField, FlatButton, RaisedButton, Dialog } from 'material-ui';
import FormsyText from 'formsy-material-ui/lib/FormsyText';

class FormularioPerfil extends Component {

	render() {
		return (
			<Dialog title="Perfil" modal={ false } open={ true }>
				<Formsy.Form>
					<Col md={ 12 }>
						<FormsyText 
							name="descricao" 
							floatingLabelText="Descrição do perfil" 
							fullWidth={ true } 
							required
						/>
					</Col>
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
				</Formsy.Form>
			</Dialog>
		);
	}

}

export default FormularioPerfil;