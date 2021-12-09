import { MDBContainer } from "mdb-react-ui-kit";
import Card from "../Components/card";
import React from "react";
import CreateModal from "../Components/create-modal";
export default function Room() {
	return (
		<MDBContainer>
			<CreateModal />
			<Card />
		</MDBContainer>
	);
}
