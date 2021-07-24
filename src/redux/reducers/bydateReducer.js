import { SET_BYDATE, CLEAR_BYDATE } from "../actions";

const initialByDateState = [];

export default function byDateReducer(state = initialByDateState, action) {
  switch (action.type) {
    case SET_BYDATE:
      return [...action.bydate];
    case CLEAR_BYDATE:
      return [];
    default:
      return state;
  }
}

