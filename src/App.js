import React, { useEffect, useState } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";

import Room from "./pages/room.js";
import "./App.css";

function About() {
	return <h2>About</h2>;
}
let data;
function App() {
	const [rooms, setRooms] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			const url = "https://dreamhotel.herokuapp.com/api/rooms";
			const response = await fetch(url);
			data = await response.json();
			setRooms(
				data.sort((a, b) => {
					return a.room_id - b.room_id;
				})
			);
		}
		getData();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setLoading(false);
		}, 500);
		return () => clearInterval(interval);
	}, []);

	const onKeyUp = (event) => {
		const value = event.target.value;
		setRooms(
			value
				? data.filter((room) => {
						return room.room_id.indexOf(value) !== -1;
				  })
				: data
		);
	};

	function addRoom(room) {
		setRooms((values) => [...values, room]);
	}
	return (
		<div className="App">
			{loading ? (
				<div>Loading</div>
			) : (
				<>
					<Navbar onKeyUp={onKeyUp} />
					<Routes>
						<Route
							path="/"
							element={
								<Room addRoom={addRoom} rooms={rooms} />
							}
						/>
						<Route path="/about" element={<About />} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
