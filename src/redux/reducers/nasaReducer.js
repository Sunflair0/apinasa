import { ADD_ENTRY, REMOVE_ENTRY, CLEAR_NASA } from "../actions";

const initialState = {
  nasa: [],
};

export default function nasaReducer(
  state = initialState, action) {
  switch (action.type) {
    case ADD_ENTRY:
      return { 
        ...state, liked: [...state.liked, action.nasa]
      };
    case REMOVE_ENTRY:
      return {
        ...state,
        liked: state.liked.filter((entry) => entry.id !== action.id),
      };
    case CLEAR_NASA:
      return { 
        ...state, liked: [] 
      };
    default:
      return state;
  }
}