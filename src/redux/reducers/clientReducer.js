import { SET_CLIENT, CLEAR_CLIENT } from "../actions";

const initialState = { id: null, clienttag: null, role: null };

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CLIENT:
      return { ...state, client: action.client };
    case CLEAR_CLIENT:
      return { ...state, client: null };
    default:
      return state;
  }
}
