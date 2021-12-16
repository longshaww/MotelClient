import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRoomPage } from "../actions/get-room-home";

Card.propTypes = {
	rooms: PropTypes.array,
};
Card.defaultProps = {
	rooms: [],
};

export default function Card() {
	const rooms = useSelector((state) => state.RoomHomePage.rooms);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getData() {
			const url = "http://localhost:4000/management";
			const response = await fetch(url);
			const data = await response.json();
			dispatch(
				getRoomPage(
					data.sort((a, b) => {
						return a.room_id - b.room_id;
					})
				)
			);
		}
		getData();
	}, [dispatch]);

	return (
		<MDBRow>
			{rooms.map((room, index) => {
				return (
					<MDBCol key={index} md="3">
						<MDBCard
							className="mt-5"
							style={{ maxWidth: "22rem" }}
						>
							<MDBCardImage
								src={room.image}
								position="top"
								alt="..."
							/>
							<MDBCardBody>
								<MDBCardTitle>
									{`Phòng ${room.room_id}`}
								</MDBCardTitle>
								<div className="Content">
									<div>{room.room_type}</div>
									<div>{room.note}</div>
								</div>
								<Link to={`/management/${room._id}`}>
									View
								</Link>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				);
			})}
		</MDBRow>
	);
}
