import { SET_STARTDATE, CLEAR_STARTDATE } from "../actions";

const initialStartDateState = [];

export default function startdateReducer(state = initialStartDateState, action) {
  switch (action.type) {
    case SET_STARTDATE:
      return [...action.startdate];
    case CLEAR_STARTDATE:
      return [];
    default:
      return state;
  }
}
