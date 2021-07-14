import { SET_CONTACTUS, CLEAR_CONTACTUS } from "../actions";

const initialContactusState = [];

export default function contactusReducer(state = initialContactusState, action) {
  switch (action.type) {
    case SET_CONTACTUS:
      return [...action.contactus];
    case CLEAR_CONTACTUS:
      return [];
    default:
      return state;
  }
}
