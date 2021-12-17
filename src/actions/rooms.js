const FETCHED_DATA_ROOM_HOME = "FETCHED_DATA_ROOM_HOME";
const ADD_ROOM = "ADD_ROOM";

export const setRooms = (data) => ({
	type: FETCHED_DATA_ROOM_HOME,
	payload: data,
});

export const addRoomAction = (data) => ({
	type: ADD_ROOM,
	payload: data,
});

export const fetchRooms = async (dispatch) => {
	const url = "http://localhost:4000/management";
	const response = await fetch(url);
	const data = await response.json();
	dispatch(
		setRooms(
			data.sort((a, b) => {
				return a.room_id - b.room_id;
			})
		)
	);
};
