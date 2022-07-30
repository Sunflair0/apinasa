import { SET_USER, CLEAR_USER } from "../actions";

const initialState = { id: null, username: null, role: null };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    case CLEAR_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}
