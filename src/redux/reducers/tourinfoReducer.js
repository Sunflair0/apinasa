import { SET_TOURINFO, CLEAR_TOURINFO } from "../actions";

const initialTourinfoState = [];

export default function tourinfoReducer(state = initialTourinfoState, action) {
  switch (action.type) {
    case SET_TOURINFO:
      return [...action.tourinfo];
    case CLEAR_TOURINFO:
      return [];
    default:
      return state;
  }
}
