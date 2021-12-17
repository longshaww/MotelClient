import React from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRooms } from "../../actions/rooms";

export default function Navbar() {
	const rooms = useSelector((state) => state.RoomHomePage.rooms);
	const dispatch = useDispatch();

	const onKeyUp = (event) => {
		const value = event.target.value;
		dispatch(
			setRooms(
				value
					? rooms.filter((room) => {
							return room.room_id.indexOf(value) !== -1;
					  })
					: rooms
			)
		);
	};
	return (
		<MDBNavbar light bgColor="light">
			<MDBContainer fluid>
				<Link to="/">Trang chủ</Link>
				<Link to="/management">Quản lý</Link>
				<Link to="/about">Thông tin</Link>
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
