import { MDBContainer } from "mdb-react-ui-kit";
import Card from "../containers/rooms";
import CreateModal from "../Components/rooms/create-modal";
import React from "react";
export default function Room() {
	return (
		<MDBContainer>
			<CreateModal />
			<Card />
		</MDBContainer>
	);
}
