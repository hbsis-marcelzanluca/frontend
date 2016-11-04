import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Navbar extends Component {

	constructor(props) {
		super(props);
		this.state = { aberto: false };
	}

	render() {
		return (
			<AppBar title="HBSIS" onLeftIconButtonTouchTap={ this.controlarExibicaoMenu }>
				<Drawer open={ this.state.aberto } docked={ false }>
					<MenuItem
						containerElement={ <Link to="/" /> }
						onTouchTap={ this.controlarExibicaoMenu }>Início</MenuItem>

						<MenuItem
							containerElement={ <Link to="/veiculo" /> }
							onTouchTap={ this.controlarExibicaoMenu }>Veículos</MenuItem>

					<MenuItem
						containerElement={ <Link to="/veiculo/perfis" /> }
						onTouchTap={ this.controlarExibicaoMenu }>Perfis de veículo</MenuItem>
				</Drawer>
			</AppBar>
		);
	}

	controlarExibicaoMenu = () => this.setState({ aberto: !this.state.aberto });
}

export default Navbar;
