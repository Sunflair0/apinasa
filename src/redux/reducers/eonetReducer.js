import { SET_EONET, CLEAR_EONET } from "../actions";

const initialEonetState = [];

export default function eonetReducer(state = initialEonetState, action) {
  switch (action.type) {
    case SET_EONET:
      return [...action.eonet];
    case CLEAR_EONET:
      return [];
    default:
      return state;
  }
}
