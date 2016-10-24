import React, { Component } from 'react';

class EditarVeiculo extends Component {

	render() {
		let texto = this.props.texto;
		
		return (<span>{ texto }</span>);
	}

}

export default EditarVeiculo;