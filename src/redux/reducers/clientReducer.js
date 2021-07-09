import { SET_CLIENT, CLEAR_CLIENT } from "../actions";

const initialClientState = { id: null, client: null, role: null };

export default function clientReducer(state = initialClienrState, action) {
  switch (action.type) {
    case SET_CLIENT:
      return { ...state, client: action.client };
    case CLEAR_CLIENT:
      return { ...state, client: null };
    default:
      return state;
  }
}
