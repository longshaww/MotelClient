import React from "react";
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

Card.propTypes = {
	rooms: PropTypes.array,
};
Card.defaultProps = {
	rooms: [],
};

export default function Card(props) {
	const { rooms } = props;

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
									<div>{room.price}</div>
									<div>{room.note}</div>
								</div>
								<Link to={`/rooms/${room._id}`}>
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
