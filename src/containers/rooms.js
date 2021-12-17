import { connect } from "react-redux";
import Card from "../Components/rooms/card";
import { setRooms, addRoomAction } from "../actions/rooms";
import { fetchRooms } from "../actions/rooms";

const mapStateToProps = (state) => {
	return {
		rooms: state.RoomHomePage.rooms,
	};
};

const mapActionToProps = (dispatch) => ({
	setRooms: (data) => dispatch(setRooms(data)),
	fetchRooms: () => dispatch(fetchRooms()),
	addRoomAction: (data) => dispatch(addRoomAction(data)),
});

export default connect(mapStateToProps, mapActionToProps)(Card);
