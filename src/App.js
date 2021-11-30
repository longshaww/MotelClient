import React, { Component } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBCardImage,
	MDBBtn,
} from "mdb-react-ui-kit";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			rooms: [],
		};
	}

	async componentDidMount() {
		const url = "https://dreamhotel.herokuapp.com/api/rooms";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({ rooms: data, loading: false });
	}
	render() {
		const { loading, rooms } = this.state;
		if (loading) {
			<div>Loading</div>;
		}
		return (
			<MDBContainer>
				<MDBRow>
					{rooms.map((room) => {
						return (
							<MDBCol md="3">
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
										<MDBCardText>
											<ul className="Content">
												<li>
													{
														room.room_type
													}
												</li>
												<li>
													{room.price}
												</li>
												<li>{room.note}</li>
											</ul>
										</MDBCardText>
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
			</MDBContainer>
		);
	}
}

export default App;
