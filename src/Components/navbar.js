import React from "react";
import { MDBContainer, MDBNavbar } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRoomPage } from "../actions/get-room-home";

export default function Navbar() {
	const rooms = useSelector((state) => state.RoomHomePage.rooms);
	const dispatch = useDispatch();

	const onKeyUp = (event) => {
		const value = event.target.value;
		dispatch(
			getRoomPage(
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
				<Link to="/">Home</Link>
				<Link to="/management">Room</Link>
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
