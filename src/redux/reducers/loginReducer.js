import { SET_LOGIN, CLEAR_LOGIN } from "../actions";

const initialloginState = [];

export default function loginReducer(state = initialloginState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return [...action.login];
    case CLEAR_LOGIN:
      return [];
    default:
      return state;
  }
}
