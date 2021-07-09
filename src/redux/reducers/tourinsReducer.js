import { SET_TOURINS, CLEAR_TOURINS, CLEAR_TOURINFO } from "../actions";

const initialTourinshState = [];

export default function tourinsReducer(state = initialTourinsState, action) {
  switch (action.type) {
    case SET_TOURINS:
      return [...action.tourins];
    case CLEAR_TOURINS:
      return [];
    default:
      return state;
  }
}
