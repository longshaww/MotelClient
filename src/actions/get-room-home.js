export const getRoomPage = (data) => ({
	type: "FETCHED_DATA_ROOM_HOME",
	payload: data,
});

export const addRoomAction = (data) => ({
	type: "ADD_ROOM",
	payload: data,
});
