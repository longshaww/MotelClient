import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
	MDBInputGroup,
	MDBInputGroupText,
	MDBInputGroupElement,
} from "mdb-react-ui-kit";

export default function Form() {
	const [inputs, setInputs] = useState({});
	const MySwal = withReactContent(Swal);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		// console.log(name, value);
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// console.log(inputs);
		await fetch("http://localhost:4000/api/rooms", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(inputs),
		});
		await MySwal.fire({
			title: <p>Good job!</p>,
			icon: "success",
		});
	};
	return (
		<form onSubmit={handleSubmit} id="form">
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					name="room_type"
					value={inputs.room_type || ""}
					onChange={handleChange}
					placeholder="Room type"
				/>
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					name="price"
					value={inputs.price || ""}
					onChange={handleChange}
					placeholder="Price"
				/>
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement type="text" placeholder="Note" />
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					name="room_state"
					value={inputs.room_state || ""}
					onChange={handleChange}
					placeholder="Room State"
				/>
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					placeholder="Room Id"
					value={inputs.room_id || ""}
					onChange={handleChange}
					name="room_id"
				/>
			</MDBInputGroup>
		</form>
	);
}
