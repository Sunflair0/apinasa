
import { ADD_APOD, DELETE_APOD, CLEAR_APOD, SET_BYDATE, CLEAR_BYDATE } from "../actions";

const initialApodState = [];

export default function apodReducer(state = initialApodState, action) {
  switch (action.type) {
case ADD_APOD:
	return[...state,action.pic];
case DELETE_APOD:
	return state.filter((pic) => pic.id !==action.id)
case CLEAR_APOD:
	return [];
default:
	return state;
case SET_BYDATE:
	return[];
case CLEAR_BYDATE:
	return[];
  }}
	
