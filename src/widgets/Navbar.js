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

	controlarExibicaoMenu = () => this.setState({ aberto: !this.state.aberto });

	render() {
		return (
			<AppBar title="HBSIS" onLeftIconButtonTouchTap={ this.controlarExibicaoMenu }>
				<Drawer open={ this.state.aberto } docked={ false }>
					<MenuItem
						containerElement={ <Link to="/" /> }
						onTouchTap={ this.controlarExibicaoMenu }>Home</MenuItem>
				</Drawer>
			</AppBar>
		);
	}

}

export default Navbar;