import React, { Component } from 'react';
import { Dialog, FlatButton } from 'material-ui';
import FormularioPerfil from './Perfil.form';

class ModalPerfil extends Component {

	constructor(props) {
		super(props);
		this.state = { modalAberta: false };
	}

	componentWillReceiveProps(prevProps, prevState) {
		this.setState({ modalAberta: prevProps.aberto });
	}

	manipuladorModal = () => {
		let modalAberta = this.state.modalAberta;
		this.setState({ modalAberta: !modalAberta });
	}

	render() {
		return (
			<Dialog 
				modal={ false } 
				open={ this.state.modalAberta }
				onRequestClose={ this.manipuladorModal }
			>
				<FormularioPerfil 
					salvar={ this.salvar }
					aoSalvar={ this.manipuladorModal }
				/>
			</Dialog>
		);
	}

}

export default ModalPerfil;