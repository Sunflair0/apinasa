import { SET_CLIENTTAG, CLEAR_CLIENTTAG } from "../actions";

const initialClienttagState = { id: null, clienttag: null, role: null };

export default function clienttagReducer(state = initialClienttagState, action) {
  switch (action.type) {
    case SET_CLIENTTAG:
      return { ...state, clienttag: action.clienttag };
    case CLEAR_CLIENTTAG:
      return { ...state, clienttag: null };
    default:
      return state;
  }
}
