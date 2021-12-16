import React, { useEffect } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/navbar";

import Room from "./pages/room.js";
import Home from "./pages/home.js";
import ViewRoom from "./pages/view.js";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { loaded } from "./actions/loading";

function About() {
	return <h2>About</h2>;
}

function App() {
	// const [rooms, setRooms] = useState([]);
	const loading = useSelector((state) => state.loadingState.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(loaded());
		}, 500);
		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<div className="App">
			{loading ? (
				<div>Loading</div>
			) : (
				<>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="management">
							<Route index element={<Room />} />
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
