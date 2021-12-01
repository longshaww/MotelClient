import React, { Component } from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";

export default class Navbar extends Component {
	render() {
		return (
			<MDBNavbar light bgColor="light">
				<MDBContainer fluid>
					<a className="navbar-brand" href="/">
						Navbar
					</a>
					<input
						onKeyUp={this.props.onKeyUp}
						type="search"
						className="form-control d-flex input-group w-auto"
						placeholder="Type query"
						aria-label="Search"
					/>
				</MDBContainer>
			</MDBNavbar>
		);
	}
}
