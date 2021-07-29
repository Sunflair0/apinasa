import { SET_BUYVENT, CLEAR_BUYVENT } from "../actions";

const initialBuyVentState = [];

export default function buyventReducer(state = initialBuyVentState, action) {
  switch (action.type) {
    case SET_BUYVENT:
      return [...action.enddate];
    case CLEAR_BUYVENT:
      return [];
    default:
      return state;
  }
}
