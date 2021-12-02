import React, { Component } from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBContainer } from "mdb-react-ui-kit";

import Navbar from "./Components/navbar";
import Card from "./Components/card";
import Modal from "./Components/modal";
import "./App.css";
let data;
class App extends Component {
	constructor() {
		super();

		this.state = {
			loading: true,
			rooms: [],
		};
		this.onClick = this.onClick.bind(this);
		this.onKeyUp = this.onKeyUp.bind(this);
	}
	async getData() {
		const url = "https://dreamhotel.herokuapp.com/api/rooms";
		const response = await fetch(url);
		data = await response.json();
		this.setState({
			rooms: data.sort((a, b) => {
				return a.room_id - b.room_id;
			}),
			loading: false,
		});
	}
	async componentDidMount() {
		await this.getData();
	}

	onKeyUp(event) {
		const value = event.target.value;
		this.setState({
			rooms: value
				? data.filter((room) => {
						return room.room_id.indexOf(value) !== -1;
				  })
				: data,
		});
	}
	onClick() {
		alert("Hello");
	}
	render() {
		const { loading, rooms } = this.state;
		if (loading) {
			return <div>Loading</div>;
		}
		return (
			<div className="App">
				<Navbar onKeyUp={this.onKeyUp} />
				<MDBContainer>
					<Modal />
					<Card rooms={rooms} />
				</MDBContainer>
			</div>
		);
	}
}

export default App;
