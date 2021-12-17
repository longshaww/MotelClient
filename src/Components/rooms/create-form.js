import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { addRoomAction } from "../../actions/rooms";
import {
	MDBInputGroup,
	MDBInputGroupText,
	MDBInputGroupElement,
} from "mdb-react-ui-kit";

export default function CreateForm() {
	const dispatch = useDispatch();

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
		const response = await fetch("http://localhost:4000/management", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(inputs),
		});
		await MySwal.fire({
			title: <p>Đã thêm phòng mới</p>,
			icon: "success",
		});
		dispatch(addRoomAction(await response.json()));
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
					placeholder="Loại phòng"
				/>
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					name="price"
					value={inputs.price || ""}
					onChange={handleChange}
					placeholder="Giá"
				/>
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					name="note"
					value={inputs.note || ""}
					onChange={handleChange}
					placeholder="Ghi chú"
				/>
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					name="state"
					value={inputs.state || ""}
					onChange={handleChange}
					placeholder="Trạng thái"
				/>
			</MDBInputGroup>
			<MDBInputGroup className="mb-3">
				<MDBInputGroupText>@</MDBInputGroupText>
				<MDBInputGroupElement
					type="text"
					placeholder="Số phòng"
					value={inputs.room_id || ""}
					onChange={handleChange}
					name="room_id"
				/>
			</MDBInputGroup>
		</form>
	);
}
