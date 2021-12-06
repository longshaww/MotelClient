import { MDBContainer } from "mdb-react-ui-kit";
import Card from "../Components/card";
import React, { useEffect, useState } from "react";
import CreateModal from "../Components/create-modal";

export default function Room(props) {
	const { addRoom, rooms } = props;
	return (
		<MDBContainer>
			<CreateModal addRoom={addRoom} />
			<Card rooms={rooms} />
		</MDBContainer>
	);
}
