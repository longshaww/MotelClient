import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewRoom() {
	const [room, setRoom] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		async function getData() {
			const url = `http://localhost:4000/management/${id}`;
			const response = await fetch(url);
			const data = await response.json();
			setRoom(data);
		}
		getData();
	}, [id]);
	console.log(room);
	return (
		<div>
			{!room ? (
				<div>Fetching ....</div>
			) : (
				<>
					<div>{room.price}</div>
					<div>{room.note}</div>
				</>
			)}
		</div>
	);
}
