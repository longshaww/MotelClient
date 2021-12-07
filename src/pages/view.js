import { useEffect, useState } from "react";
export default function ViewRoom() {
	const [room, setRoom] = useState();
	useEffect(() => {
		async function getData(room) {
			const url = `https://dreamhotel.herokuapp.com/api/rooms/${room._id}`;
			const response = await fetch(url);
			data = await response.json();
			setRoom(data);
		}
	});

	return <div>hjjjjj</div>;
}
