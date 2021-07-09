import { SET_POD, CLEAR_POD } from "../actions";

const initialPodState = [];

export default function podReducer(state = initialPodState, action) {
  switch (action.type) {
    case SET_POD:
      return [...action.exoplanet];
    case CLEAR_POD:
      return [];
    default:
      return state;
  }
}
