import React, { useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";

import Room from "./pages/room.js";
import Home from "./pages/home.js";
import ViewRoom from "./pages/view.js";
import "./App.css";
import { getRoomPage, addRoomAction } from "./actions/get-room-home";
import { useSelector, useDispatch } from "react-redux";
import { loaded } from "./actions/loading";

function About() {
	return <h2>About</h2>;
}

let data;

function App() {
	// const [rooms, setRooms] = useState([]);
	const listRoom = useSelector((state) => state.RoomHomePage.rooms);
	const loading = useSelector((state) => state.loadingState.loading);
	const dispatch = useDispatch();
	useEffect(() => {
		async function getData() {
			const url = "https://dreamhotel.herokuapp.com/api/rooms";
			const response = await fetch(url);
			data = await response.json();
			dispatch(
				getRoomPage(
					data.sort((a, b) => {
						return a.room_id - b.room_id;
					})
				)
			);
		}
		getData();
	}, [dispatch]);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(loaded());
		}, 500);
		return () => clearInterval(interval);
	}, [dispatch]);

	const onKeyUp = (event) => {
		const value = event.target.value;
		dispatch(
			getRoomPage(
				value
					? data.filter((room) => {
							return room.room_id.indexOf(value) !== -1;
					  })
					: data
			)
		);
	};

	function addRoom(room) {
		dispatch(addRoomAction(room));
		// setRooms((values) => [...values, room]);
	}
	return (
		<div className="App">
			{loading ? (
				<div>Loading</div>
			) : (
				<>
					<Navbar onKeyUp={onKeyUp} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="rooms">
							<Route
								index
								element={
									<Room
										addRoom={addRoom}
										rooms={listRoom}
									/>
								}
							/>
							<Route path=":id" element={<ViewRoom />} />
						</Route>
						<Route path="/about" element={<About />} />
					</Routes>
				</>
			)}
		</div>
	);
}

export default App;
