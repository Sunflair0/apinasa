import { SET_ADDFAVORITE, CLEAR_ADDFAVORITE } from "../actions";

const initialAddFavoriteState = [];

export default function addFavoriteReducer(state = initialAddFavoriteState, action) {
  switch (action.type) {
    case SET_ADDFAVORITE:
      return [...action.addFavorite];
    case CLEAR_ADDFAVORITE:
      return [];
    default:
      return state;
  }
}

