import { SET_CONTACTUS, CLEAR_CONTACTUS } from "../actions";

const initialContactUsState = [];

export default function contactusReducer(state = initialContactUsState, action) {
  switch (action.type) {
    case SET_CONTACTUS:
      return [...action.contactus];
    case CLEAR_CONTACTUS:
      return [];
    default:
      return state;
  }
}
