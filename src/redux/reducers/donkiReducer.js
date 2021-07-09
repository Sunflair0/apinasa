import { SET_DONKI, CLEAR_DONKI } from "../actions";

const initialDonkiState = [];

export default function donkiReducer(state = initialDonkiState, action) {
  switch (action.type) {
    case SET_DONKI:
      return [...action.donki];
    case CLEAR_DONKI:
      return [];
    default:
      return state;
  }
}
