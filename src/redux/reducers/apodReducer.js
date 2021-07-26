import { SET_apod, CLEAR_apod } from "../actions";

const initialapodState = [];

export default function apodReducer(state = initialapodState, action) {
  switch (action.type) {
    case SET_apod:
      return [...action.apod];
    case CLEAR_apod:
      return [];
    default:
      return state;
  }
}
