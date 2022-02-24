import Card from "../containers/rooms";
import CreateModal from "../Components/rooms/create-modal";
import React from "react";
export default function Room() {
	return (
		<div className="container">
			<CreateModal />
			<Card />
		</div>
	);
}
