import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postRoom } from "../../actions/rooms";
import {
	MDBInputGroup,
	MDBInputGroupText,
	MDBInputGroupElement,
} from "mdb-react-ui-kit";

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

	// const uploadImage = async () => {
	// 	const formData = new FormData(document.querySelector("#form"));
	// 	formData.append("image", image, image.name);
	// 	for (var pair of formData) {
	// 		console.log(pair);
	// 	}
	// 	// formData.append("upload_preset", "oeaxhoph");
	// 	// const res = await axios.post(
	// 	// 	"https://api.cloudinary.com/v1_1/longshaww/image/upload",
	// 	// 	formData
	// 	// );
	// 	// console.log(res);
	// 	// setInputs((values) => ({
	// 	// 	...values,
	// 	// 	image: res.data.secure_url,
	// 	// }));
	// 	// console.log(inputs);
	// };

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(document.querySelector("#form"));
		formData.append("image", image);
		// uploadImage();
		dispatch(postRoom(formData));
	};

	return (
		<>
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
