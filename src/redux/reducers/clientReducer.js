import { SET_CLIENT, CLEAR_CLIENT } from "../actions";

const initialClientState = { id: null, clienttag: null, role: null };

export default function clientReducer(state = initialClienrState, action) {
  switch (action.type) {
    case SET_CLIENT:
      return { ...state, clienttag: action.clienttag };
    case CLEAR_CLIENT:
      return { ...state, clienttag: null };
    default:
      return state;
  }
}
