
import { ADD_APOD, DELETE_APOD, CLEAR_APOD, SET_BYDATE, CLEAR_BYDATE, CLEAR_ENDDATE, SET_STARTDATE, SET_ENDDATE, CLEAR_STARTDATE } from "../actions";

const initialApodState = [];

export default function apodReducer(state = initialApodState, action) {
  switch (action.type) {
case ADD_APOD:
	return[...state,action.gif];
case DELETE_APOD:
	return state.filter((gif) => gif.id !==action.id)
case CLEAR_APOD:
	return [];
default:
	return state;
case SET_BYDATE:
	return[];
case CLEAR_BYDATE:
	return[];
case SET_STARTDATE:
	return state;
case CLEAR_STARTDATE:
	return[];
case SET_ENDDATE:
	return [];
case CLEAR_ENDDATE:
	return[];
  }}
	
