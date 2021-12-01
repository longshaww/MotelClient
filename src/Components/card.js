import React, { Component } from "react";
import {
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardImage,
	MDBBtn,
} from "mdb-react-ui-kit";

export default class Card extends Component {
	render() {
		const { rooms } = this.props;
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
									<MDBBtn
										href="#"
										className="d-flex justify-content-center"
									>
										View
									</MDBBtn>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					);
				})}
			</MDBRow>
		);
	}
}
