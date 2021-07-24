import { SET_ENDDATE, CLEAR_ENDDATE } from "../actions";

const initialEndDateState = [];

export default function enddateReducer(state = initialEndDateState, action) {
  switch (action.type) {
    case SET_ENDDATE:
      return [...action.enddate];
    case CLEAR_ENDDATE:
      return [];
    default:
      return state;
  }
}
