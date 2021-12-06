import React from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar(props) {
	const { onKeyUp } = props;
	return (
		<MDBNavbar light bgColor="light">
			<MDBContainer fluid>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<input
					onKeyUp={onKeyUp}
					type="search"
					className="form-control d-flex input-group w-auto"
					placeholder="Type query"
					aria-label="Search"
				/>
			</MDBContainer>
		</MDBNavbar>
	);
}
