import { ADD_ENTRY, DELETE_ENTRY, CLEAR_ALBUM } from "../actions";

const initialAlbumState = [];

export default function albumReducer(
  state = initialAlbumState, action)
 {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, action.item];
    case DELETE_ENTRY:
      return state.filter((item) => item.id !== action.id);
    case CLEAR_ALBUM:
      return [];
    default:
      return state;
  }
}
