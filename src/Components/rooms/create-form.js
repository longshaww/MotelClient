import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postRoom } from "../../actions/rooms";

import Form from "react-bootstrap/Form";
export default function CreateForm() {
	const dispatch = useDispatch();

	const [inputs, setInputs] = useState({});
	const [image, setImage] = useState();

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleFileChange = (event) => {
		setImage(event.target.files[0]);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(document.querySelector("#form"));
		formData.append("image", image);
		dispatch(postRoom(formData));
	};

	return (
		<>
			<form onSubmit={handleSubmit} id="form">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Loại phòng</Form.Label>
					<Form.Control
						type="text"
						name="room_type"
						value={inputs.room_type || ""}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Giá</Form.Label>
					<Form.Control
						type="text"
						name="price"
						value={inputs.price || ""}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Ghi chú</Form.Label>
					<Form.Control
						type="text"
						name="note"
						value={inputs.note || ""}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Trạng thái</Form.Label>
					<Form.Control
						type="text"
						name="state"
						value={inputs.state || ""}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Số phòng</Form.Label>
					<Form.Control
						type="text"
						value={inputs.room_id || ""}
						onChange={handleChange}
						name="room_id"
					/>
				</Form.Group>
			</form>
			<label className="form-label" htmlFor="customFile">
				Hình ảnh
			</label>
			<input
				type="file"
				className="form-control"
				id="customFile"
				onChange={handleFileChange}
				name="image"
			/>
		</>
	);
}
